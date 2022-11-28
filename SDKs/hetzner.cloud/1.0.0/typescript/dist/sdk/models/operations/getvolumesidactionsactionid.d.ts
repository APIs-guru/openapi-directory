import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVolumesIdActionsActionIdPathParams extends SpeakeasyBase {
    actionId: number;
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetVolumesIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetVolumesIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetVolumesIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetVolumesIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    command: string;
    error: GetVolumesIdActionsActionIdActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetVolumesIdActionsActionIdActionResponseActionResources[];
    started: string;
    status: GetVolumesIdActionsActionIdActionResponseActionStatusEnum;
}
export declare class GetVolumesIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetVolumesIdActionsActionIdActionResponseAction;
}
export declare class GetVolumesIdActionsActionIdRequest extends SpeakeasyBase {
    pathParams: GetVolumesIdActionsActionIdPathParams;
}
export declare class GetVolumesIdActionsActionIdResponse extends SpeakeasyBase {
    actionResponse?: GetVolumesIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
}
