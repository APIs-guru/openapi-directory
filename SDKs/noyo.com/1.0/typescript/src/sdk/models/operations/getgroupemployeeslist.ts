import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupEmployeesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class GetGroupEmployeesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetGroupEmployeesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupEmployeesListPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGroupEmployeesListQueryParams;
}


export class GetGroupEmployeesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedEmployeeResult?: shared.PaginatedEmployeeResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
