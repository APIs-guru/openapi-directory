import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostNetworksIdActionsAddSubnetPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum {
    Cloud = "cloud",
    Server = "server",
    Vswitch = "vswitch"
}
export declare class PostNetworksIdActionsAddSubnetAddSubnetRequest extends SpeakeasyBase {
    ipRange?: string;
    networkZone: string;
    type: PostNetworksIdActionsAddSubnetAddSubnetRequestTypeEnum;
    vswitchId?: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostNetworksIdActionsAddSubnetActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostNetworksIdActionsAddSubnetActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostNetworksIdActionsAddSubnetActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostNetworksIdActionsAddSubnetActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostNetworksIdActionsAddSubnetActionResponseActionResources[];
    started: string;
    status: PostNetworksIdActionsAddSubnetActionResponseActionStatusEnum;
}
export declare class PostNetworksIdActionsAddSubnetActionResponse extends SpeakeasyBase {
    action: PostNetworksIdActionsAddSubnetActionResponseAction;
}
export declare class PostNetworksIdActionsAddSubnetRequest extends SpeakeasyBase {
    pathParams: PostNetworksIdActionsAddSubnetPathParams;
    request?: PostNetworksIdActionsAddSubnetAddSubnetRequest;
}
export declare class PostNetworksIdActionsAddSubnetResponse extends SpeakeasyBase {
    actionResponse?: PostNetworksIdActionsAddSubnetActionResponse;
    contentType: string;
    statusCode: number;
}
