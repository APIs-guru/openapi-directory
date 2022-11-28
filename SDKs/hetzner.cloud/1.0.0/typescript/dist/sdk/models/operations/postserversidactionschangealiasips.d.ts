import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsChangeAliasIpsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostServersIdActionsChangeAliasIpsRequestBody extends SpeakeasyBase {
    aliasIps: string[];
    network: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsChangeAliasIpsActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsChangeAliasIpsActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsChangeAliasIpsActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsChangeAliasIpsActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsChangeAliasIpsActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsChangeAliasIpsActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsChangeAliasIpsActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsChangeAliasIpsActionResponseAction;
}
export declare class PostServersIdActionsChangeAliasIpsRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsChangeAliasIpsPathParams;
    request?: PostServersIdActionsChangeAliasIpsRequestBody;
}
export declare class PostServersIdActionsChangeAliasIpsResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsChangeAliasIpsActionResponse;
    contentType: string;
    statusCode: number;
}
