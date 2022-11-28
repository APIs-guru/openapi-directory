import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFirewallsIdActionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetFirewallsIdActionsSortParameterSortEnum {
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
export declare enum GetFirewallsIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetFirewallsIdActionsQueryParams extends SpeakeasyBase {
    sort?: GetFirewallsIdActionsSortParameterSortEnum;
    status?: GetFirewallsIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetFirewallsIdActionsActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetFirewallsIdActionsActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetFirewallsIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetFirewallsIdActionsActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: GetFirewallsIdActionsActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetFirewallsIdActionsActionsResponseActionResources[];
    started: string;
    status: GetFirewallsIdActionsActionsResponseActionStatusEnum;
}
export declare class GetFirewallsIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetFirewallsIdActionsActionsResponseMeta extends SpeakeasyBase {
    pagination: GetFirewallsIdActionsActionsResponseMetaPagination;
}
export declare class GetFirewallsIdActionsActionsResponse extends SpeakeasyBase {
    actions: GetFirewallsIdActionsActionsResponseAction[];
    meta?: GetFirewallsIdActionsActionsResponseMeta;
}
export declare class GetFirewallsIdActionsRequest extends SpeakeasyBase {
    pathParams: GetFirewallsIdActionsPathParams;
    queryParams: GetFirewallsIdActionsQueryParams;
}
export declare class GetFirewallsIdActionsResponse extends SpeakeasyBase {
    actionsResponse?: GetFirewallsIdActionsActionsResponse;
    contentType: string;
    statusCode: number;
}
