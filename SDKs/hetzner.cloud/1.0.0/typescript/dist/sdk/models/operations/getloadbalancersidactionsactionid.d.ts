import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLoadBalancersIdActionsActionIdPathParams extends SpeakeasyBase {
    actionId: number;
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetLoadBalancersIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetLoadBalancersIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetLoadBalancersIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    command: string;
    error: GetLoadBalancersIdActionsActionIdActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetLoadBalancersIdActionsActionIdActionResponseActionResources[];
    started: string;
    status: GetLoadBalancersIdActionsActionIdActionResponseActionStatusEnum;
}
export declare class GetLoadBalancersIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetLoadBalancersIdActionsActionIdActionResponseAction;
}
export declare class GetLoadBalancersIdActionsActionIdRequest extends SpeakeasyBase {
    pathParams: GetLoadBalancersIdActionsActionIdPathParams;
}
export declare class GetLoadBalancersIdActionsActionIdResponse extends SpeakeasyBase {
    actionResponse?: GetLoadBalancersIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
}
