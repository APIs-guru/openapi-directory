import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostLoadBalancersIdActionsDisablePublicInterfacePathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources[];
    started: string;
    status: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum;
}
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse extends SpeakeasyBase {
    action: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction;
}
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceRequest extends SpeakeasyBase {
    pathParams: PostLoadBalancersIdActionsDisablePublicInterfacePathParams;
}
export declare class PostLoadBalancersIdActionsDisablePublicInterfaceResponse extends SpeakeasyBase {
    actionResponse?: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse;
    contentType: string;
    statusCode: number;
}
