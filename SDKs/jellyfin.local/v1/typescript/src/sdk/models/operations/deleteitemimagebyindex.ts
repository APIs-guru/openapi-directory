import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteItemImageByIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageIndex" })
  imageIndex: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: shared.ImageTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class DeleteItemImageByIndexSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DeleteItemImageByIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteItemImageByIndexPathParams;

  @Metadata()
  security: DeleteItemImageByIndexSecurity;
}


export class DeleteItemImageByIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
