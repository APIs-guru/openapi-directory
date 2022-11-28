import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteItemIdFromItemListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class DeleteItemIdFromItemListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteItemIdFromItemListPathParams;
}


export class DeleteItemIdFromItemListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseListResource?: shared.ResponseListResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
