import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetImagesIdActionsActionIdPathParams extends SpeakeasyBase {
    actionId: number;
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class GetImagesIdActionsActionIdActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class GetImagesIdActionsActionIdActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum GetImagesIdActionsActionIdActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class GetImagesIdActionsActionIdActionResponseAction extends SpeakeasyBase {
    command: string;
    error: GetImagesIdActionsActionIdActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: GetImagesIdActionsActionIdActionResponseActionResources[];
    started: string;
    status: GetImagesIdActionsActionIdActionResponseActionStatusEnum;
}
export declare class GetImagesIdActionsActionIdActionResponse extends SpeakeasyBase {
    action: GetImagesIdActionsActionIdActionResponseAction;
}
export declare class GetImagesIdActionsActionIdRequest extends SpeakeasyBase {
    pathParams: GetImagesIdActionsActionIdPathParams;
}
export declare class GetImagesIdActionsActionIdResponse extends SpeakeasyBase {
    actionResponse?: GetImagesIdActionsActionIdActionResponse;
    contentType: string;
    statusCode: number;
}
