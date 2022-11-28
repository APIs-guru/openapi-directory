import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutPlacementGroupsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutPlacementGroupsIdUpdatePlacementGroupRequest extends SpeakeasyBase {
    labels?: Map<string, any>;
    name?: string;
}
export declare enum PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}
export declare class PutPlacementGroupsIdPlacementGroupResponsePlacementGroup extends SpeakeasyBase {
    created: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    servers: number[];
    type: PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum;
}
export declare class PutPlacementGroupsIdPlacementGroupResponse extends SpeakeasyBase {
    placementGroup: PutPlacementGroupsIdPlacementGroupResponsePlacementGroup;
}
export declare class PutPlacementGroupsIdRequest extends SpeakeasyBase {
    pathParams: PutPlacementGroupsIdPathParams;
    request?: PutPlacementGroupsIdUpdatePlacementGroupRequest;
}
export declare class PutPlacementGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    placementGroupResponse?: PutPlacementGroupsIdPlacementGroupResponse;
    statusCode: number;
}
