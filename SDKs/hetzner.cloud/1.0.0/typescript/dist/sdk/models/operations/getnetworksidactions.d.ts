import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworksIdActionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetNetworksIdActionsSortParameterSortEnum {
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
export declare enum GetNetworksIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetNetworksIdActionsQueryParams extends SpeakeasyBase {
    sort?: GetNetworksIdActionsSortParameterSortEnum;
    status?: GetNetworksIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetNetworksIdActionsActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetNetworksIdActionsActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetNetworksIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetNetworksIdActionsActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: GetNetworksIdActionsActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetNetworksIdActionsActionsResponseActionResources[];
    started: string;
    status: GetNetworksIdActionsActionsResponseActionStatusEnum;
}
export declare class GetNetworksIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetNetworksIdActionsActionsResponseMeta extends SpeakeasyBase {
    pagination: GetNetworksIdActionsActionsResponseMetaPagination;
}
export declare class GetNetworksIdActionsActionsResponse extends SpeakeasyBase {
    actions: GetNetworksIdActionsActionsResponseAction[];
    meta?: GetNetworksIdActionsActionsResponseMeta;
}
export declare class GetNetworksIdActionsRequest extends SpeakeasyBase {
    pathParams: GetNetworksIdActionsPathParams;
    queryParams: GetNetworksIdActionsQueryParams;
}
export declare class GetNetworksIdActionsResponse extends SpeakeasyBase {
    actionsResponse?: GetNetworksIdActionsActionsResponse;
    contentType: string;
    statusCode: number;
}
