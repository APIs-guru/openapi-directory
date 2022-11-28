import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsChangeProtectionPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostLoadBalancersIdActionsChangeProtectionRequestBody extends SpeakeasyBase {
    delete?: boolean;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsChangeProtectionActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsChangeProtectionActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsChangeProtectionActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsChangeProtectionActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsChangeProtectionActionResponseAction;
}
export declare class PostLoadBalancersIdActionsChangeProtectionRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsChangeProtectionPathParams;
    request?: PostLoadBalancersIdActionsChangeProtectionRequestBody;
}
export declare class PostLoadBalancersIdActionsChangeProtectionResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsChangeProtectionActionResponse;
    contentType: string;
    statusCode: number;
}
