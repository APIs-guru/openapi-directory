import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsChangeDnsPtrPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostServersIdActionsChangeDnsPtrRequestBody extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsChangeDnsPtrActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsChangeDnsPtrActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsChangeDnsPtrActionResponseAction;
}
export declare class PostServersIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsChangeDnsPtrPathParams;
    request?: PostServersIdActionsChangeDnsPtrRequestBody;
}
export declare class PostServersIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsChangeDnsPtrActionResponse;
    contentType: string;
    statusCode: number;
}
