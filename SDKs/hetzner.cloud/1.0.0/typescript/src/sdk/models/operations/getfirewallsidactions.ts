import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFirewallsIdActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetFirewallsIdActionsSortParameterSortEnum {
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

export enum GetFirewallsIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}


export class GetFirewallsIdActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFirewallsIdActionsSortParameterSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetFirewallsIdActionsStatusParameterStatusEnum;
}


// GetFirewallsIdActionsActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetFirewallsIdActionsActionsResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetFirewallsIdActionsActionsResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetFirewallsIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetFirewallsIdActionsActionsResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetFirewallsIdActionsActionsResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetFirewallsIdActionsActionsResponseActionResources })
  resources: GetFirewallsIdActionsActionsResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetFirewallsIdActionsActionsResponseActionStatusEnum;
}


export class GetFirewallsIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
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


export class GetFirewallsIdActionsActionsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetFirewallsIdActionsActionsResponseMetaPagination;
}


export class GetFirewallsIdActionsActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: GetFirewallsIdActionsActionsResponseAction })
  actions: GetFirewallsIdActionsActionsResponseAction[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetFirewallsIdActionsActionsResponseMeta;
}


export class GetFirewallsIdActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFirewallsIdActionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFirewallsIdActionsQueryParams;
}


export class GetFirewallsIdActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionsResponse?: GetFirewallsIdActionsActionsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
