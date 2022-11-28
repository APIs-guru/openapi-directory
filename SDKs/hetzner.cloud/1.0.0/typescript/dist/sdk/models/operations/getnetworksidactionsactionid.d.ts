import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworksIdActionsActionIdPathParams extends SpeakeasyBase {
    actionId: number;
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetNetworksIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetNetworksIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetNetworksIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetNetworksIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    command: string;
    error: GetNetworksIdActionsActionIdActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetNetworksIdActionsActionIdActionResponseActionResources[];
    started: string;
    status: GetNetworksIdActionsActionIdActionResponseActionStatusEnum;
}
export declare class GetNetworksIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetNetworksIdActionsActionIdActionResponseAction;
}
export declare class GetNetworksIdActionsActionIdRequest extends SpeakeasyBase {
    pathParams: GetNetworksIdActionsActionIdPathParams;
}
export declare class GetNetworksIdActionsActionIdResponse extends SpeakeasyBase {
    actionResponse?: GetNetworksIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
}
