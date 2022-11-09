import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteItemIdFromItemListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class DeleteItemIdFromItemListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteItemIdFromItemListPathParams;
}


export class DeleteItemIdFromItemListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseListResource?: shared.ResponseListResource;

  @Metadata()
  statusCode: number;
}
