import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFloatingIpsIdActionsChangeProtectionPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest extends SpeakeasyBase {
    delete?: boolean;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostFloatingIpsIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFloatingIpsIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostFloatingIpsIdActionsChangeProtectionActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources[];
    started: string;
    status: PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum;
}
export declare class PostFloatingIpsIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostFloatingIpsIdActionsChangeProtectionActionResponseAction;
}
export declare class PostFloatingIpsIdActionsChangeProtectionRequest extends SpeakeasyBase {
    pathParams: PostFloatingIpsIdActionsChangeProtectionPathParams;
    request?: PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest;
}
export declare class PostFloatingIpsIdActionsChangeProtectionResponse extends SpeakeasyBase {
    actionResponse?: PostFloatingIpsIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
}
