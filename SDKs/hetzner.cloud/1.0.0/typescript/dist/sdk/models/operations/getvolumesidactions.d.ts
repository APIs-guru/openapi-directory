import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVolumesIdActionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetVolumesIdActionsSortParameterSortEnum {
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
export declare enum GetVolumesIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetVolumesIdActionsQueryParams extends SpeakeasyBase {
    sort?: GetVolumesIdActionsSortParameterSortEnum;
    status?: GetVolumesIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetVolumesIdActionsActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetVolumesIdActionsActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetVolumesIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetVolumesIdActionsActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: GetVolumesIdActionsActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetVolumesIdActionsActionsResponseActionResources[];
    started: string;
    status: GetVolumesIdActionsActionsResponseActionStatusEnum;
}
export declare class GetVolumesIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetVolumesIdActionsActionsResponseMeta extends SpeakeasyBase {
    pagination: GetVolumesIdActionsActionsResponseMetaPagination;
}
export declare class GetVolumesIdActionsActionsResponse extends SpeakeasyBase {
    actions: GetVolumesIdActionsActionsResponseAction[];
    meta?: GetVolumesIdActionsActionsResponseMeta;
}
export declare class GetVolumesIdActionsRequest extends SpeakeasyBase {
    pathParams: GetVolumesIdActionsPathParams;
    queryParams: GetVolumesIdActionsQueryParams;
}
export declare class GetVolumesIdActionsResponse extends SpeakeasyBase {
    actionsResponse?: GetVolumesIdActionsActionsResponse;
    contentType: string;
    statusCode: number;
}
