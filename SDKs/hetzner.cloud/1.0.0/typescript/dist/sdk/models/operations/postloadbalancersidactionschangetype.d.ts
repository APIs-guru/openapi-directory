import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsChangeTypePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostLoadBalancersIdActionsChangeTypeChangeTypeRequest extends SpeakeasyBase {
    loadBalancerType: string;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsChangeTypeActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsChangeTypeActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsChangeTypeActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsChangeTypeActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsChangeTypeActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsChangeTypeActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsChangeTypeActionResponseAction;
}
export declare class PostLoadBalancersIdActionsChangeTypeRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsChangeTypePathParams;
    request?: PostLoadBalancersIdActionsChangeTypeChangeTypeRequest;
}
export declare class PostLoadBalancersIdActionsChangeTypeResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsChangeTypeActionResponse;
    contentType: string;
    statusCode: number;
}
