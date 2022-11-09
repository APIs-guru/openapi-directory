import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemImageInfosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetItemImageInfosSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetItemImageInfosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemImageInfosPathParams;

  @Metadata()
  security: GetItemImageInfosSecurity;
}


export class GetItemImageInfosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ImageInfo })
  imageInfos?: shared.ImageInfo[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
