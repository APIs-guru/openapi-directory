import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActionsIdPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetActionsIdActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetActionsIdActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetActionsIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetActionsIdActionResponseAction extends SpeakeasyBase {
    command: string;
    error: GetActionsIdActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetActionsIdActionResponseActionResources[];
    started: string;
    status: GetActionsIdActionResponseActionStatusEnum;
}
export declare class GetActionsIdActionResponse extends SpeakeasyBase {
    action: GetActionsIdActionResponseAction;
}
export declare class GetActionsIdRequest extends SpeakeasyBase {
    pathParams: GetActionsIdPathParams;
}
export declare class GetActionsIdResponse extends SpeakeasyBase {
    actionResponse?: GetActionsIdActionResponse;
    contentType: string;
    statusCode: number;
}
