import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsDetachFromNetworkPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostLoadBalancersIdActionsDetachFromNetworkRequestBody extends SpeakeasyBase {
    network: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsDetachFromNetworkActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction;
}
export declare class PostLoadBalancersIdActionsDetachFromNetworkRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsDetachFromNetworkPathParams;
    request?: PostLoadBalancersIdActionsDetachFromNetworkRequestBody;
}
export declare class PostLoadBalancersIdActionsDetachFromNetworkResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsDetachFromNetworkActionResponse;
    contentType: string;
    statusCode: number;
}
