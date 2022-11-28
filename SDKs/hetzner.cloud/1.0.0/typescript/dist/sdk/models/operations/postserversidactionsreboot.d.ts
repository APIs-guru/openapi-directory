import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsRebootPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsRebootActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsRebootActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsRebootActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsRebootActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsRebootActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsRebootActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsRebootActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsRebootActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsRebootActionResponseAction;
}
export declare class PostServersIdActionsRebootRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsRebootPathParams;
}
export declare class PostServersIdActionsRebootResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsRebootActionResponse;
    contentType: string;
    statusCode: number;
}
