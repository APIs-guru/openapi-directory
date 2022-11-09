import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCertificatesIdActionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetCertificatesIdActionsSortParameterSortEnum {
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

export enum GetCertificatesIdActionsStatusParameterStatusEnum {
    Running = "running"
,    Success = "success"
,    Error = "error"
}


export class GetCertificatesIdActionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetCertificatesIdActionsSortParameterSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetCertificatesIdActionsStatusParameterStatusEnum;
}


export class GetCertificatesIdActionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCertificatesIdActionsPathParams;

  @Metadata()
  queryParams: GetCertificatesIdActionsQueryParams;
}


// GetCertificatesIdActionsActionsResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class GetCertificatesIdActionsActionsResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class GetCertificatesIdActionsActionsResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum GetCertificatesIdActionsActionsResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class GetCertificatesIdActionsActionsResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: GetCertificatesIdActionsActionsResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.GetCertificatesIdActionsActionsResponseActionResources })
  resources: GetCertificatesIdActionsActionsResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: GetCertificatesIdActionsActionsResponseActionStatusEnum;
}


export class GetCertificatesIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
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


export class GetCertificatesIdActionsActionsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: GetCertificatesIdActionsActionsResponseMetaPagination;
}


export class GetCertificatesIdActionsActionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.GetCertificatesIdActionsActionsResponseAction })
  actions: GetCertificatesIdActionsActionsResponseAction[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetCertificatesIdActionsActionsResponseMeta;
}


export class GetCertificatesIdActionsResponse extends SpeakeasyBase {
  @Metadata()
  actionsResponse?: GetCertificatesIdActionsActionsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
