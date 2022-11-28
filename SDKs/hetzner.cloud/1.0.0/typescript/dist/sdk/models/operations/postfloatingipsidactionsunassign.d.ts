import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFloatingIpsIdActionsUnassignPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostFloatingIpsIdActionsUnassignActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostFloatingIpsIdActionsUnassignActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostFloatingIpsIdActionsUnassignActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostFloatingIpsIdActionsUnassignActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostFloatingIpsIdActionsUnassignActionResponseActionResources[];
    started: string;
    status: PostFloatingIpsIdActionsUnassignActionResponseActionStatusEnum;
}
export declare class PostFloatingIpsIdActionsUnassignActionResponse extends SpeakeasyBase {
    action: PostFloatingIpsIdActionsUnassignActionResponseAction;
}
export declare class PostFloatingIpsIdActionsUnassignRequest extends SpeakeasyBase {
    pathParams: PostFloatingIpsIdActionsUnassignPathParams;
}
export declare class PostFloatingIpsIdActionsUnassignResponse extends SpeakeasyBase {
    actionResponse?: PostFloatingIpsIdActionsUnassignActionResponse;
    contentType: string;
    statusCode: number;
}
