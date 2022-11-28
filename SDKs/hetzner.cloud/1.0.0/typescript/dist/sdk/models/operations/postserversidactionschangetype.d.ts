import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsChangeTypePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostServersIdActionsChangeTypeRequestBody extends SpeakeasyBase {
    serverType: string;
    upgradeDisk: boolean;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsChangeTypeActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsChangeTypeActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsChangeTypeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsChangeTypeActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsChangeTypeActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsChangeTypeActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsChangeTypeActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsChangeTypeActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsChangeTypeActionResponseAction;
}
export declare class PostServersIdActionsChangeTypeRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsChangeTypePathParams;
    request?: PostServersIdActionsChangeTypeRequestBody;
}
export declare class PostServersIdActionsChangeTypeResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsChangeTypeActionResponse;
    contentType: string;
    statusCode: number;
}
