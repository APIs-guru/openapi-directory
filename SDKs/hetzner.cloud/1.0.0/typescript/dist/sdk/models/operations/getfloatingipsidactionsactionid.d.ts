import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFloatingIpsIdActionsActionIdPathParams extends SpeakeasyBase {
    actionId: number;
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetFloatingIpsIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetFloatingIpsIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetFloatingIpsIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    command: string;
    error: GetFloatingIpsIdActionsActionIdActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetFloatingIpsIdActionsActionIdActionResponseActionResources[];
    started: string;
    status: GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum;
}
export declare class GetFloatingIpsIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetFloatingIpsIdActionsActionIdActionResponseAction;
}
export declare class GetFloatingIpsIdActionsActionIdRequest extends SpeakeasyBase {
    pathParams: GetFloatingIpsIdActionsActionIdPathParams;
}
export declare class GetFloatingIpsIdActionsActionIdResponse extends SpeakeasyBase {
    actionResponse?: GetFloatingIpsIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
}
