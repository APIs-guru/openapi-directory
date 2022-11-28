import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCertificatesIdActionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetCertificatesIdActionsSortParameterSortEnum {
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
export declare enum GetCertificatesIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetCertificatesIdActionsQueryParams extends SpeakeasyBase {
    sort?: GetCertificatesIdActionsSortParameterSortEnum;
    status?: GetCertificatesIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetCertificatesIdActionsActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetCertificatesIdActionsActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetCertificatesIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetCertificatesIdActionsActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: GetCertificatesIdActionsActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetCertificatesIdActionsActionsResponseActionResources[];
    started: string;
    status: GetCertificatesIdActionsActionsResponseActionStatusEnum;
}
export declare class GetCertificatesIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetCertificatesIdActionsActionsResponseMeta extends SpeakeasyBase {
    pagination: GetCertificatesIdActionsActionsResponseMetaPagination;
}
export declare class GetCertificatesIdActionsActionsResponse extends SpeakeasyBase {
    actions: GetCertificatesIdActionsActionsResponseAction[];
    meta?: GetCertificatesIdActionsActionsResponseMeta;
}
export declare class GetCertificatesIdActionsRequest extends SpeakeasyBase {
    pathParams: GetCertificatesIdActionsPathParams;
    queryParams: GetCertificatesIdActionsQueryParams;
}
export declare class GetCertificatesIdActionsResponse extends SpeakeasyBase {
    actionsResponse?: GetCertificatesIdActionsActionsResponse;
    contentType: string;
    statusCode: number;
}
