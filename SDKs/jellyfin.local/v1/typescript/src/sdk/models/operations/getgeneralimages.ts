import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGeneralImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetGeneralImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetGeneralImagesSecurity;
}


export class GetGeneralImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ImageByNameInfo })
  imageByNameInfos?: shared.ImageByNameInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
