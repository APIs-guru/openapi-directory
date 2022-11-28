import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteItemIdFromSpotListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class DeleteItemIdFromSpotListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteItemIdFromSpotListPathParams;
}


export class DeleteItemIdFromSpotListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  responseListResource?: shared.ResponseListResource;

  @SpeakeasyMetadata()
  statusCode: number;
}
