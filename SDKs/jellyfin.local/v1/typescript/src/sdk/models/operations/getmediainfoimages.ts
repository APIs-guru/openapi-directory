import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMediaInfoImagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMediaInfoImagesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetMediaInfoImagesSecurity;
}


export class GetMediaInfoImagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ImageByNameInfo })
  imageByNameInfos?: shared.ImageByNameInfo[];

  @Metadata()
  statusCode: number;
}
