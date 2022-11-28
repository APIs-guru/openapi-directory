import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsAddToPlacementGroupPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest extends SpeakeasyBase {
    placementGroup: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsAddToPlacementGroupActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsAddToPlacementGroupActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsAddToPlacementGroupActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsAddToPlacementGroupActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsAddToPlacementGroupActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsAddToPlacementGroupActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsAddToPlacementGroupActionResponseAction;
}
export declare class PostServersIdActionsAddToPlacementGroupRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsAddToPlacementGroupPathParams;
    request?: PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest;
}
export declare class PostServersIdActionsAddToPlacementGroupResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsAddToPlacementGroupActionResponse;
    contentType: string;
    statusCode: number;
}
