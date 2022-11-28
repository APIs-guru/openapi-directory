import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostVolumesIdActionsDetachPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostVolumesIdActionsDetachActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostVolumesIdActionsDetachActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostVolumesIdActionsDetachActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostVolumesIdActionsDetachActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostVolumesIdActionsDetachActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostVolumesIdActionsDetachActionResponseActionResources[];
    started: string;
    status: PostVolumesIdActionsDetachActionResponseActionStatusEnum;
}
export declare class PostVolumesIdActionsDetachActionResponse extends SpeakeasyBase {
    action: PostVolumesIdActionsDetachActionResponseAction;
}
export declare class PostVolumesIdActionsDetachRequest extends SpeakeasyBase {
    pathParams: PostVolumesIdActionsDetachPathParams;
}
export declare class PostVolumesIdActionsDetachResponse extends SpeakeasyBase {
    actionResponse?: PostVolumesIdActionsDetachActionResponse;
    contentType: string;
    statusCode: number;
}
