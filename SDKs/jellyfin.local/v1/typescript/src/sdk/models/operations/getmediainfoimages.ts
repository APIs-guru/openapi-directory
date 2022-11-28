import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMediaInfoImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMediaInfoImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetMediaInfoImagesSecurity;
}


export class GetMediaInfoImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ImageByNameInfo })
  imageByNameInfos?: shared.ImageByNameInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
