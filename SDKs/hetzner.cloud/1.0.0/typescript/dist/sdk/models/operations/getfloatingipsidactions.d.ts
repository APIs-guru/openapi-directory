import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFloatingIpsIdActionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetFloatingIpsIdActionsSortParameterSortEnum {
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
export declare enum GetFloatingIpsIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetFloatingIpsIdActionsQueryParams extends SpeakeasyBase {
    sort?: GetFloatingIpsIdActionsSortParameterSortEnum;
    status?: GetFloatingIpsIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetFloatingIpsIdActions200ApplicationJsonActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetFloatingIpsIdActions200ApplicationJsonActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetFloatingIpsIdActions200ApplicationJsonAction extends SpeakeasyBase {
    command: string;
    error: GetFloatingIpsIdActions200ApplicationJsonActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetFloatingIpsIdActions200ApplicationJsonActionResources[];
    started: string;
    status: GetFloatingIpsIdActions200ApplicationJsonActionStatusEnum;
}
export declare class GetFloatingIpsIdActions200ApplicationJson extends SpeakeasyBase {
    actions: GetFloatingIpsIdActions200ApplicationJsonAction[];
}
export declare class GetFloatingIpsIdActionsRequest extends SpeakeasyBase {
    pathParams: GetFloatingIpsIdActionsPathParams;
    queryParams: GetFloatingIpsIdActionsQueryParams;
}
export declare class GetFloatingIpsIdActionsResponse extends SpeakeasyBase {
    contentType: string;
    getFloatingIpsIdActions200ApplicationJsonObject?: GetFloatingIpsIdActions200ApplicationJson;
    statusCode: number;
}
