import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetActionsSortParameterSortEnum {
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
export declare enum GetActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetActionsQueryParams extends SpeakeasyBase {
    id?: number;
    sort?: GetActionsSortParameterSortEnum;
    status?: GetActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetActionsActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetActionsActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetActionsActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: GetActionsActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetActionsActionsResponseActionResources[];
    started: string;
    status: GetActionsActionsResponseActionStatusEnum;
}
export declare class GetActionsActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetActionsActionsResponseMeta extends SpeakeasyBase {
    pagination: GetActionsActionsResponseMetaPagination;
}
export declare class GetActionsActionsResponse extends SpeakeasyBase {
    actions: GetActionsActionsResponseAction[];
    meta?: GetActionsActionsResponseMeta;
}
export declare class GetActionsRequest extends SpeakeasyBase {
    queryParams: GetActionsQueryParams;
}
export declare class GetActionsResponse extends SpeakeasyBase {
    actionsResponse?: GetActionsActionsResponse;
    contentType: string;
    statusCode: number;
}
