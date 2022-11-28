import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLoadBalancersIdActionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetLoadBalancersIdActionsSortParameterSortEnum {
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
export declare enum GetLoadBalancersIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetLoadBalancersIdActionsQueryParams extends SpeakeasyBase {
    sort?: GetLoadBalancersIdActionsSortParameterSortEnum;
    status?: GetLoadBalancersIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetLoadBalancersIdActionsActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetLoadBalancersIdActionsActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetLoadBalancersIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetLoadBalancersIdActionsActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: GetLoadBalancersIdActionsActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetLoadBalancersIdActionsActionsResponseActionResources[];
    started: string;
    status: GetLoadBalancersIdActionsActionsResponseActionStatusEnum;
}
export declare class GetLoadBalancersIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetLoadBalancersIdActionsActionsResponseMeta extends SpeakeasyBase {
    pagination: GetLoadBalancersIdActionsActionsResponseMetaPagination;
}
export declare class GetLoadBalancersIdActionsActionsResponse extends SpeakeasyBase {
    actions: GetLoadBalancersIdActionsActionsResponseAction[];
    meta?: GetLoadBalancersIdActionsActionsResponseMeta;
}
export declare class GetLoadBalancersIdActionsRequest extends SpeakeasyBase {
    pathParams: GetLoadBalancersIdActionsPathParams;
    queryParams: GetLoadBalancersIdActionsQueryParams;
}
export declare class GetLoadBalancersIdActionsResponse extends SpeakeasyBase {
    actionsResponse?: GetLoadBalancersIdActionsActionsResponse;
    contentType: string;
    statusCode: number;
}
