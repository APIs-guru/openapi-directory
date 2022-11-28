import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFirewallsIdActionsActionIdPathParams extends SpeakeasyBase {
    actionId: number;
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetFirewallsIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetFirewallsIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetFirewallsIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetFirewallsIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    command: string;
    error: GetFirewallsIdActionsActionIdActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetFirewallsIdActionsActionIdActionResponseActionResources[];
    started: string;
    status: GetFirewallsIdActionsActionIdActionResponseActionStatusEnum;
}
export declare class GetFirewallsIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetFirewallsIdActionsActionIdActionResponseAction;
}
export declare class GetFirewallsIdActionsActionIdRequest extends SpeakeasyBase {
    pathParams: GetFirewallsIdActionsActionIdPathParams;
}
export declare class GetFirewallsIdActionsActionIdResponse extends SpeakeasyBase {
    actionResponse?: GetFirewallsIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
}
