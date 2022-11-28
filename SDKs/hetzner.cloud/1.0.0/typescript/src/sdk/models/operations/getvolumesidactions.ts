import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVolumesIdActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetVolumesIdActionsSortParameterSortEnum {
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

export enum GetVolumesIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}


export class GetVolumesIdActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVolumesIdActionsSortParameterSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetVolumesIdActionsStatusParameterStatusEnum;
}


// GetVolumesIdActionsActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetVolumesIdActionsActionsResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetVolumesIdActionsActionsResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetVolumesIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetVolumesIdActionsActionsResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetVolumesIdActionsActionsResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetVolumesIdActionsActionsResponseActionResources })
  resources: GetVolumesIdActionsActionsResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetVolumesIdActionsActionsResponseActionStatusEnum;
}


export class GetVolumesIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
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


export class GetVolumesIdActionsActionsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetVolumesIdActionsActionsResponseMetaPagination;
}


export class GetVolumesIdActionsActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: GetVolumesIdActionsActionsResponseAction })
  actions: GetVolumesIdActionsActionsResponseAction[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetVolumesIdActionsActionsResponseMeta;
}


export class GetVolumesIdActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVolumesIdActionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVolumesIdActionsQueryParams;
}


export class GetVolumesIdActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionsResponse?: GetVolumesIdActionsActionsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
