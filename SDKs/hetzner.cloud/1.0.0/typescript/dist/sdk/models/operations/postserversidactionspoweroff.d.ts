import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsPoweroffPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsPoweroffActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsPoweroffActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsPoweroffActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsPoweroffActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsPoweroffActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsPoweroffActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsPoweroffActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsPoweroffActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsPoweroffActionResponseAction;
}
export declare class PostServersIdActionsPoweroffRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsPoweroffPathParams;
}
export declare class PostServersIdActionsPoweroffResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsPoweroffActionResponse;
    contentType: string;
    statusCode: number;
}
