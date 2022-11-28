import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostVolumesIdActionsResizePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostVolumesIdActionsResizeRequestBody extends SpeakeasyBase {
    size: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostVolumesIdActionsResizeActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostVolumesIdActionsResizeActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostVolumesIdActionsResizeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostVolumesIdActionsResizeActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostVolumesIdActionsResizeActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostVolumesIdActionsResizeActionResponseActionResources[];
    started: string;
    status: PostVolumesIdActionsResizeActionResponseActionStatusEnum;
}
export declare class PostVolumesIdActionsResizeActionResponse extends SpeakeasyBase {
    action: PostVolumesIdActionsResizeActionResponseAction;
}
export declare class PostVolumesIdActionsResizeRequest extends SpeakeasyBase {
    pathParams: PostVolumesIdActionsResizePathParams;
    request?: PostVolumesIdActionsResizeRequestBody;
}
export declare class PostVolumesIdActionsResizeResponse extends SpeakeasyBase {
    actionResponse?: PostVolumesIdActionsResizeActionResponse;
    contentType: string;
    statusCode: number;
}
