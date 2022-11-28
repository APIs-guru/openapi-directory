import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFloatingIpsIdActionsAssignPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostFloatingIpsIdActionsAssignAssignFloatingIpRequest extends SpeakeasyBase {
    server: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostFloatingIpsIdActionsAssignActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostFloatingIpsIdActionsAssignActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFloatingIpsIdActionsAssignActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostFloatingIpsIdActionsAssignActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostFloatingIpsIdActionsAssignActionResponseActionResources[];
    started: string;
    status: PostFloatingIpsIdActionsAssignActionResponseActionStatusEnum;
}
export declare class PostFloatingIpsIdActionsAssignActionResponse extends SpeakeasyBase {
    action: PostFloatingIpsIdActionsAssignActionResponseAction;
}
export declare class PostFloatingIpsIdActionsAssignRequest extends SpeakeasyBase {
    pathParams: PostFloatingIpsIdActionsAssignPathParams;
    request?: PostFloatingIpsIdActionsAssignAssignFloatingIpRequest;
}
export declare class PostFloatingIpsIdActionsAssignResponse extends SpeakeasyBase {
    actionResponse?: PostFloatingIpsIdActionsAssignActionResponse;
    contentType: string;
    statusCode: number;
}
