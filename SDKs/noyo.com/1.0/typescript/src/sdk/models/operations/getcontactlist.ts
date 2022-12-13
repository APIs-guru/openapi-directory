import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContactListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class GetContactListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetContactListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContactListPathParams;

  @SpeakeasyMetadata()
  queryParams: GetContactListQueryParams;
}


export class GetContactListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedContactResult?: shared.PaginatedContactResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
