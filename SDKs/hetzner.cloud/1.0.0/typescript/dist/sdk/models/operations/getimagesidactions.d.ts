import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetImagesIdActionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetImagesIdActionsSortParameterSortEnum {
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
export declare enum GetImagesIdActionsStatusParameterStatusEnum {
    Running = "running",
    Success = "success",
    Error = "error"
}
export declare class GetImagesIdActionsQueryParams extends SpeakeasyBase {
    sort?: GetImagesIdActionsSortParameterSortEnum;
    status?: GetImagesIdActionsStatusParameterStatusEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetImagesIdActionsActionsResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetImagesIdActionsActionsResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetImagesIdActionsActionsResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetImagesIdActionsActionsResponseAction extends SpeakeasyBase {
    command: string;
    error: GetImagesIdActionsActionsResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetImagesIdActionsActionsResponseActionResources[];
    started: string;
    status: GetImagesIdActionsActionsResponseActionStatusEnum;
}
export declare class GetImagesIdActionsActionsResponseMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetImagesIdActionsActionsResponseMeta extends SpeakeasyBase {
    pagination: GetImagesIdActionsActionsResponseMetaPagination;
}
export declare class GetImagesIdActionsActionsResponse extends SpeakeasyBase {
    actions: GetImagesIdActionsActionsResponseAction[];
    meta?: GetImagesIdActionsActionsResponseMeta;
}
export declare class GetImagesIdActionsRequest extends SpeakeasyBase {
    pathParams: GetImagesIdActionsPathParams;
    queryParams: GetImagesIdActionsQueryParams;
}
export declare class GetImagesIdActionsResponse extends SpeakeasyBase {
    actionsResponse?: GetImagesIdActionsActionsResponse;
    contentType: string;
    statusCode: number;
}
