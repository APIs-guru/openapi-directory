import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetServersIdActionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetServersIdActionsSortParameterSortEnum {
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
export declare enum GetServersIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetServersIdActionsQueryParams extends SpeakeasyBase {
    sort?: GetServersIdActionsSortParameterSortEnum;
    status?: GetServersIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetServersIdActionsActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetServersIdActionsActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetServersIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetServersIdActionsActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: GetServersIdActionsActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetServersIdActionsActionsResponseActionResources[];
    started: string;
    status: GetServersIdActionsActionsResponseActionStatusEnum;
}
export declare class GetServersIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetServersIdActionsActionsResponseMeta extends SpeakeasyBase {
    pagination: GetServersIdActionsActionsResponseMetaPagination;
}
export declare class GetServersIdActionsActionsResponse extends SpeakeasyBase {
    actions: GetServersIdActionsActionsResponseAction[];
    meta?: GetServersIdActionsActionsResponseMeta;
}
export declare class GetServersIdActionsRequest extends SpeakeasyBase {
    pathParams: GetServersIdActionsPathParams;
    queryParams: GetServersIdActionsQueryParams;
}
export declare class GetServersIdActionsResponse extends SpeakeasyBase {
    actionsResponse?: GetServersIdActionsActionsResponse;
    contentType: string;
    statusCode: number;
}
