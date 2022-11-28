import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsAttachToNetworkPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostServersIdActionsAttachToNetworkAttachToNetworkRequest extends SpeakeasyBase {
    aliasIps?: string[];
    ip?: string;
    network: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsAttachToNetworkActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsAttachToNetworkActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsAttachToNetworkActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsAttachToNetworkActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsAttachToNetworkActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsAttachToNetworkActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsAttachToNetworkActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsAttachToNetworkActionResponseAction;
}
export declare class PostServersIdActionsAttachToNetworkRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsAttachToNetworkPathParams;
    request?: PostServersIdActionsAttachToNetworkAttachToNetworkRequest;
}
export declare class PostServersIdActionsAttachToNetworkResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsAttachToNetworkActionResponse;
    contentType: string;
    statusCode: number;
}
