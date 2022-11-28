import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServersIdActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetServersIdActionsSortParameterSortEnum {
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

export enum GetServersIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}


export class GetServersIdActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetServersIdActionsSortParameterSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetServersIdActionsStatusParameterStatusEnum;
}


// GetServersIdActionsActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetServersIdActionsActionsResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetServersIdActionsActionsResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetServersIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetServersIdActionsActionsResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetServersIdActionsActionsResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetServersIdActionsActionsResponseActionResources })
  resources: GetServersIdActionsActionsResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetServersIdActionsActionsResponseActionStatusEnum;
}


export class GetServersIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
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


export class GetServersIdActionsActionsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetServersIdActionsActionsResponseMetaPagination;
}


export class GetServersIdActionsActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: GetServersIdActionsActionsResponseAction })
  actions: GetServersIdActionsActionsResponseAction[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetServersIdActionsActionsResponseMeta;
}


export class GetServersIdActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetServersIdActionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetServersIdActionsQueryParams;
}


export class GetServersIdActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionsResponse?: GetServersIdActionsActionsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
