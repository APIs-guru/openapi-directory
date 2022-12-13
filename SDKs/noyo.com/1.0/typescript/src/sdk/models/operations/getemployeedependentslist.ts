import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmployeeDependentsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}


export class GetEmployeeDependentsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetEmployeeDependentsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEmployeeDependentsListPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEmployeeDependentsListQueryParams;
}


export class GetEmployeeDependentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedDependentResult?: shared.PaginatedDependentResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
