import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFloatingIpsIdActionsChangeDnsPtrPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest extends SpeakeasyBase {
    dnsPtr: string;
    ip: string;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources[];
    started: string;
    status: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}
export declare class PostFloatingIpsIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
    action: PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction;
}
export declare class PostFloatingIpsIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
    pathParams: PostFloatingIpsIdActionsChangeDnsPtrPathParams;
    request?: PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest;
}
export declare class PostFloatingIpsIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
    actionResponse?: PostFloatingIpsIdActionsChangeDnsPtrActionResponse;
    contentType: string;
    statusCode: number;
}
