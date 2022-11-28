import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRatingImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRatingImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetRatingImagesSecurity;
}


export class GetRatingImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ImageByNameInfo })
  imageByNameInfos?: shared.ImageByNameInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
