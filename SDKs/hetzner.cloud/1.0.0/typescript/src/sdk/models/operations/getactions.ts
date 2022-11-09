import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetActionsSortParameterSortEnum {
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

export enum GetActionsStatusParameterStatusEnum {
    Running = "running"
,    Success = "success"
,    Error = "error"
}


export class GetActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetActionsSortParameterSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetActionsStatusParameterStatusEnum;
}


export class GetActionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionsQueryParams;
}


// GetActionsActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetActionsActionsResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetActionsActionsResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetActionsActionsResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetActionsActionsResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetActionsActionsResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetActionsActionsResponseActionResources })
  resources: GetActionsActionsResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetActionsActionsResponseActionStatusEnum;
}


export class GetActionsActionsResponseMetaPagination extends SpeakeasyBase {
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


export class GetActionsActionsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetActionsActionsResponseMetaPagination;
}


export class GetActionsActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.GetActionsActionsResponseAction })
  actions: GetActionsActionsResponseAction[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetActionsActionsResponseMeta;
}


export class GetActionsResponse extends SpeakeasyBase {
  @Metadata()
  actionsResponse?: GetActionsActionsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
