import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostServersIdActionsRemoveFromPlacementGroupPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostServersIdActionsRemoveFromPlacementGroupActionResponseAction extends SpeakeasyBase {
    command: string;
    error: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources[];
    started: string;
    status: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum;
}
export declare class PostServersIdActionsRemoveFromPlacementGroupActionResponse extends SpeakeasyBase {
    action: PostServersIdActionsRemoveFromPlacementGroupActionResponseAction;
}
export declare class PostServersIdActionsRemoveFromPlacementGroupRequest extends SpeakeasyBase {
    pathParams: PostServersIdActionsRemoveFromPlacementGroupPathParams;
}
export declare class PostServersIdActionsRemoveFromPlacementGroupResponse extends SpeakeasyBase {
    actionResponse?: PostServersIdActionsRemoveFromPlacementGroupActionResponse;
    contentType: string;
    statusCode: number;
}
