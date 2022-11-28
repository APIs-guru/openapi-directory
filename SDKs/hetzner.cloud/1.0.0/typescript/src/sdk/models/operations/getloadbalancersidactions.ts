import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLoadBalancersIdActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetLoadBalancersIdActionsSortParameterSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Command = "command",
    CommandAsc = "command:asc",
    CommandDesc = "command:desc",
    Status = "status",
    StatusAsc = "status:asc",
    StatusDesc = "status:desc",
    Progress = "progress",
    ProgressAsc = "progress:asc",
    ProgressDesc = "progress:desc",
    Started = "started",
    StartedAsc = "started:asc",
    StartedDesc = "started:desc",
    Finished = "finished",
    FinishedAsc = "finished:asc",
    FinishedDesc = "finished:desc"
}

export enum GetLoadBalancersIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}


export class GetLoadBalancersIdActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetLoadBalancersIdActionsSortParameterSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetLoadBalancersIdActionsStatusParameterStatusEnum;
}


// GetLoadBalancersIdActionsActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetLoadBalancersIdActionsActionsResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetLoadBalancersIdActionsActionsResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetLoadBalancersIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetLoadBalancersIdActionsActionsResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetLoadBalancersIdActionsActionsResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetLoadBalancersIdActionsActionsResponseActionResources })
  resources: GetLoadBalancersIdActionsActionsResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetLoadBalancersIdActionsActionsResponseActionStatusEnum;
}


export class GetLoadBalancersIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=last_page" })
  lastPage: number;

  @SpeakeasyMetadata({ data: "json, name=next_page" })
  nextPage: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page" })
  previousPage: number;

  @SpeakeasyMetadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetLoadBalancersIdActionsActionsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetLoadBalancersIdActionsActionsResponseMetaPagination;
}


export class GetLoadBalancersIdActionsActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: GetLoadBalancersIdActionsActionsResponseAction })
  actions: GetLoadBalancersIdActionsActionsResponseAction[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetLoadBalancersIdActionsActionsResponseMeta;
}


export class GetLoadBalancersIdActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLoadBalancersIdActionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLoadBalancersIdActionsQueryParams;
}


export class GetLoadBalancersIdActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionsResponse?: GetLoadBalancersIdActionsActionsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
