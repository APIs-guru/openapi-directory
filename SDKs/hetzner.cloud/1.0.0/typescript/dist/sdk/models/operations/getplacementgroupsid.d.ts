import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPlacementGroupsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}
export declare class GetPlacementGroupsIdPlacementGroupResponsePlacementGroup extends SpeakeasyBase {
    created: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    servers: number[];
    type: GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum;
}
export declare class GetPlacementGroupsIdPlacementGroupResponse extends SpeakeasyBase {
    placementGroup: GetPlacementGroupsIdPlacementGroupResponsePlacementGroup;
}
export declare class GetPlacementGroupsIdRequest extends SpeakeasyBase {
    pathParams: GetPlacementGroupsIdPathParams;
}
export declare class GetPlacementGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    placementGroupResponse?: GetPlacementGroupsIdPlacementGroupResponse;
    statusCode: number;
}
