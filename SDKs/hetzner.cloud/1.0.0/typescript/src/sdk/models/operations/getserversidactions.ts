import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServersIdActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetServersIdActionsSortParameterSortEnum {
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

export enum GetServersIdActionsStatusParameterStatusEnum {
    Running = "running"
,    Success = "success"
,    Error = "error"
}


export class GetServersIdActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetServersIdActionsSortParameterSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetServersIdActionsStatusParameterStatusEnum;
}


export class GetServersIdActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetServersIdActionsPathParams;

  @Metadata()
  queryParams: GetServersIdActionsQueryParams;
}


// GetServersIdActionsActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetServersIdActionsActionsResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetServersIdActionsActionsResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetServersIdActionsActionsResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetServersIdActionsActionsResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetServersIdActionsActionsResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetServersIdActionsActionsResponseActionResources })
  resources: GetServersIdActionsActionsResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetServersIdActionsActionsResponseActionStatusEnum;
}


export class GetServersIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
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


export class GetServersIdActionsActionsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetServersIdActionsActionsResponseMetaPagination;
}


export class GetServersIdActionsActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.GetServersIdActionsActionsResponseAction })
  actions: GetServersIdActionsActionsResponseAction[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetServersIdActionsActionsResponseMeta;
}


export class GetServersIdActionsResponse extends SpeakeasyBase {
  @Metadata()
  actionsResponse?: GetServersIdActionsActionsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
