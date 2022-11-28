import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostNetworksIdActionsChangeProtectionPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostNetworksIdActionsChangeProtectionChangeProtectionRequest extends SpeakeasyBase {
    delete?: boolean;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostNetworksIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostNetworksIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostNetworksIdActionsChangeProtectionActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostNetworksIdActionsChangeProtectionActionResponseActionResources[];
    started: string;
    status: PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum;
}
export declare class PostNetworksIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsChangeProtectionActionResponseAction;
}
export declare class PostNetworksIdActionsChangeProtectionRequest extends SpeakeasyBase {
    pathParams: PostNetworksIdActionsChangeProtectionPathParams;
    request?: PostNetworksIdActionsChangeProtectionChangeProtectionRequest;
}
export declare class PostNetworksIdActionsChangeProtectionResponse extends SpeakeasyBase {
    actionResponse?: PostNetworksIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
}
