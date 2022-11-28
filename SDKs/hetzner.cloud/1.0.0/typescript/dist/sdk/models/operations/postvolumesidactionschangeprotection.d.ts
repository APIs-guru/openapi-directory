import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostVolumesIdActionsChangeProtectionPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostVolumesIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
    delete?: boolean;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostVolumesIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostVolumesIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostVolumesIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostVolumesIdActionsChangeProtectionActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostVolumesIdActionsChangeProtectionActionResponseActionResources[];
    started: string;
    status: PostVolumesIdActionsChangeProtectionActionResponseActionStatusEnum;
}
export declare class PostVolumesIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostVolumesIdActionsChangeProtectionActionResponseAction;
}
export declare class PostVolumesIdActionsChangeProtectionRequest extends SpeakeasyBase {
    pathParams: PostVolumesIdActionsChangeProtectionPathParams;
    request?: PostVolumesIdActionsChangeProtectionRequestBody;
}
export declare class PostVolumesIdActionsChangeProtectionResponse extends SpeakeasyBase {
    actionResponse?: PostVolumesIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
}
