import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteItemIdFromSpotListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class DeleteItemIdFromSpotListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteItemIdFromSpotListPathParams;
}


export class DeleteItemIdFromSpotListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  responseListResource?: shared.ResponseListResource;

  @Metadata()
  statusCode: number;
}
