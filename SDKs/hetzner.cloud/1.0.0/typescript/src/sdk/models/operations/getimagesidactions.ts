import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImagesIdActionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetImagesIdActionsSortParameterSortEnum {
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

export enum GetImagesIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}


export class GetImagesIdActionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetImagesIdActionsSortParameterSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetImagesIdActionsStatusParameterStatusEnum;
}


// GetImagesIdActionsActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetImagesIdActionsActionsResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class GetImagesIdActionsActionsResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum GetImagesIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class GetImagesIdActionsActionsResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: GetImagesIdActionsActionsResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GetImagesIdActionsActionsResponseActionResources })
  resources: GetImagesIdActionsActionsResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GetImagesIdActionsActionsResponseActionStatusEnum;
}


export class GetImagesIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
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


export class GetImagesIdActionsActionsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: GetImagesIdActionsActionsResponseMetaPagination;
}


export class GetImagesIdActionsActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: GetImagesIdActionsActionsResponseAction })
  actions: GetImagesIdActionsActionsResponseAction[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetImagesIdActionsActionsResponseMeta;
}


export class GetImagesIdActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagesIdActionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetImagesIdActionsQueryParams;
}


export class GetImagesIdActionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionsResponse?: GetImagesIdActionsActionsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
