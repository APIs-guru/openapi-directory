import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsAttachToNetworkPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostLoadBalancersIdActionsAttachToNetworkRequestBody extends SpeakeasyBase {
    ip?: string;
    network: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsAttachToNetworkActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsAttachToNetworkActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsAttachToNetworkActionResponseAction;
}
export declare class PostLoadBalancersIdActionsAttachToNetworkRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsAttachToNetworkPathParams;
    request?: PostLoadBalancersIdActionsAttachToNetworkRequestBody;
}
export declare class PostLoadBalancersIdActionsAttachToNetworkResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsAttachToNetworkActionResponse;
    contentType: string;
    statusCode: number;
}
