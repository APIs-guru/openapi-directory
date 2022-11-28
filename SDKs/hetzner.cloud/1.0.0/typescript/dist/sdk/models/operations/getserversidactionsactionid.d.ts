import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetServersIdActionsActionIdPathParams extends SpeakeasyBase {
    actionId: number;
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetServersIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetServersIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetServersIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetServersIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    command: string;
    error: GetServersIdActionsActionIdActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetServersIdActionsActionIdActionResponseActionResources[];
    started: string;
    status: GetServersIdActionsActionIdActionResponseActionStatusEnum;
}
export declare class GetServersIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetServersIdActionsActionIdActionResponseAction;
}
export declare class GetServersIdActionsActionIdRequest extends SpeakeasyBase {
    pathParams: GetServersIdActionsActionIdPathParams;
}
export declare class GetServersIdActionsActionIdResponse extends SpeakeasyBase {
    actionResponse?: GetServersIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
}
