import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsEnablePublicInterfacePathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction;
}
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsEnablePublicInterfacePathParams;
}
export declare class PostLoadBalancersIdActionsEnablePublicInterfaceResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse;
    contentType: string;
    statusCode: number;
}
