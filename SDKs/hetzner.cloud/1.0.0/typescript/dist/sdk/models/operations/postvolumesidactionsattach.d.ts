import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostVolumesIdActionsAttachPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostVolumesIdActionsAttachAttachVolumeRequest extends SpeakeasyBase {
    automount?: boolean;
    server: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostVolumesIdActionsAttachActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostVolumesIdActionsAttachActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostVolumesIdActionsAttachActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostVolumesIdActionsAttachActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostVolumesIdActionsAttachActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostVolumesIdActionsAttachActionResponseActionResources[];
    started: string;
    status: PostVolumesIdActionsAttachActionResponseActionStatusEnum;
}
export declare class PostVolumesIdActionsAttachActionResponse extends SpeakeasyBase {
    action: PostVolumesIdActionsAttachActionResponseAction;
}
export declare class PostVolumesIdActionsAttachRequest extends SpeakeasyBase {
    pathParams: PostVolumesIdActionsAttachPathParams;
    request?: PostVolumesIdActionsAttachAttachVolumeRequest;
}
export declare class PostVolumesIdActionsAttachResponse extends SpeakeasyBase {
    actionResponse?: PostVolumesIdActionsAttachActionResponse;
    contentType: string;
    statusCode: number;
}
