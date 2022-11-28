import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPlacementGroupsCreatePlacementGroupRequestTypeEnum {
    Spread = "spread"
}
export declare class PostPlacementGroupsCreatePlacementGroupRequest extends SpeakeasyBase {
    labels?: Map<string, any>;
    name: string;
    type: PostPlacementGroupsCreatePlacementGroupRequestTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class PostPlacementGroupsCreatePlacementGroupResponseNullableActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostPlacementGroupsCreatePlacementGroupResponseNullableAction extends SpeakeasyBase {
    command: string;
    error: PostPlacementGroupsCreatePlacementGroupResponseNullableActionError;
    finished: string;
    id: number;
    progress: number;
    resources: PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources[];
    started: string;
    status: PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum;
}
export declare enum PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}
export declare class PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup extends SpeakeasyBase {
    created: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    servers: number[];
    type: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum;
}
export declare class PostPlacementGroupsCreatePlacementGroupResponse extends SpeakeasyBase {
    action?: PostPlacementGroupsCreatePlacementGroupResponseNullableAction;
    placementGroup: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup;
}
export declare class PostPlacementGroupsRequest extends SpeakeasyBase {
    request?: PostPlacementGroupsCreatePlacementGroupRequest;
}
export declare class PostPlacementGroupsResponse extends SpeakeasyBase {
    contentType: string;
    createPlacementGroupResponse?: PostPlacementGroupsCreatePlacementGroupResponse;
    statusCode: number;
}
