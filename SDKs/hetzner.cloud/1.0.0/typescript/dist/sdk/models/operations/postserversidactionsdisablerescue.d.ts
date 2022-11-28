import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsDisableRescuePathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsDisableRescueActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsDisableRescueActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsDisableRescueActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsDisableRescueActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsDisableRescueActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsDisableRescueActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsDisableRescueActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsDisableRescueActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsDisableRescueActionResponseAction;
}
export declare class PostServersIdActionsDisableRescueRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsDisableRescuePathParams;
}
export declare class PostServersIdActionsDisableRescueResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsDisableRescueActionResponse;
    contentType: string;
    statusCode: number;
}
