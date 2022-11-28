import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsPoweronPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsPoweronActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsPoweronActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsPoweronActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsPoweronActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsPoweronActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsPoweronActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsPoweronActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsPoweronActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsPoweronActionResponseAction;
}
export declare class PostServersIdActionsPoweronRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsPoweronPathParams;
}
export declare class PostServersIdActionsPoweronResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsPoweronActionResponse;
    contentType: string;
    statusCode: number;
}
