import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworksIdActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetNetworksIdActionsSortParameterSortEnum {
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

export enum GetNetworksIdActionsStatusParameterStatusEnum {
    Running = "running"
,    Success = "success"
,    Error = "error"
}


export class GetNetworksIdActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetNetworksIdActionsSortParameterSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetNetworksIdActionsStatusParameterStatusEnum;
}


export class GetNetworksIdActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworksIdActionsPathParams;

  @Metadata()
  queryParams: GetNetworksIdActionsQueryParams;
}


// GetNetworksIdActionsActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetNetworksIdActionsActionsResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetNetworksIdActionsActionsResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetNetworksIdActionsActionsResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetNetworksIdActionsActionsResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetNetworksIdActionsActionsResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetNetworksIdActionsActionsResponseActionResources })
  resources: GetNetworksIdActionsActionsResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetNetworksIdActionsActionsResponseActionStatusEnum;
}


export class GetNetworksIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
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


export class GetNetworksIdActionsActionsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetNetworksIdActionsActionsResponseMetaPagination;
}


export class GetNetworksIdActionsActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.GetNetworksIdActionsActionsResponseAction })
  actions: GetNetworksIdActionsActionsResponseAction[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetNetworksIdActionsActionsResponseMeta;
}


export class GetNetworksIdActionsResponse extends SpeakeasyBase {
  @Metadata()
  actionsResponse?: GetNetworksIdActionsActionsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
