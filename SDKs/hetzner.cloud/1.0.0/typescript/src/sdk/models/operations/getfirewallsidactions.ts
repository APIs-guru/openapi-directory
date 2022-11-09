import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFirewallsIdActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetFirewallsIdActionsSortParameterSortEnum {
    Id = "id"
,    IdAsc = "id:asc"
,    IdDesc = "id:desc"
,    Command = "command"
,    CommandAsc = "command:asc"
,    CommandDesc = "command:desc"
,    Status = "status"
,    StatusAsc = "status:asc"
,    StatusDesc = "status:desc"
,    Progress = "progress"
,    ProgressAsc = "progress:asc"
,    ProgressDesc = "progress:desc"
,    Started = "started"
,    StartedAsc = "started:asc"
,    StartedDesc = "started:desc"
,    Finished = "finished"
,    FinishedAsc = "finished:asc"
,    FinishedDesc = "finished:desc"
}

export enum GetFirewallsIdActionsStatusParameterStatusEnum {
    Running = "running"
,    Success = "success"
,    Error = "error"
}


export class GetFirewallsIdActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetFirewallsIdActionsSortParameterSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetFirewallsIdActionsStatusParameterStatusEnum;
}


export class GetFirewallsIdActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFirewallsIdActionsPathParams;

  @Metadata()
  queryParams: GetFirewallsIdActionsQueryParams;
}


// GetFirewallsIdActionsActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetFirewallsIdActionsActionsResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetFirewallsIdActionsActionsResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetFirewallsIdActionsActionsResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetFirewallsIdActionsActionsResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetFirewallsIdActionsActionsResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetFirewallsIdActionsActionsResponseActionResources })
  resources: GetFirewallsIdActionsActionsResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetFirewallsIdActionsActionsResponseActionStatusEnum;
}


export class GetFirewallsIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
  @Metadata({ data: "json, name=last_page" })
  lastPage: number;

  @Metadata({ data: "json, name=next_page" })
  nextPage: number;

  @Metadata({ data: "json, name=page" })
  page: number;

  @Metadata({ data: "json, name=per_page" })
  perPage: number;

  @Metadata({ data: "json, name=previous_page" })
  previousPage: number;

  @Metadata({ data: "json, name=total_entries" })
  totalEntries: number;
}


export class GetFirewallsIdActionsActionsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetFirewallsIdActionsActionsResponseMetaPagination;
}


export class GetFirewallsIdActionsActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.GetFirewallsIdActionsActionsResponseAction })
  actions: GetFirewallsIdActionsActionsResponseAction[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetFirewallsIdActionsActionsResponseMeta;
}


export class GetFirewallsIdActionsResponse extends SpeakeasyBase {
  @Metadata()
  actionsResponse?: GetFirewallsIdActionsActionsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
