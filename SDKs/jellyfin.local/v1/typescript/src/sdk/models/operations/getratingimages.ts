import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRatingImagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetRatingImagesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetRatingImagesSecurity;
}


export class GetRatingImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ImageByNameInfo })
  imageByNameInfos?: shared.ImageByNameInfo[];

  @Metadata()
  statusCode: number;
}
