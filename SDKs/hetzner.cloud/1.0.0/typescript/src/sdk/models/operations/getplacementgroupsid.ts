import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPlacementGroupsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}


export class GetPlacementGroupsIdPlacementGroupResponsePlacementGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=servers" })
  servers: number[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum;
}


export class GetPlacementGroupsIdPlacementGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=placement_group" })
  placementGroup: GetPlacementGroupsIdPlacementGroupResponsePlacementGroup;
}


export class GetPlacementGroupsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlacementGroupsIdPathParams;
}


export class GetPlacementGroupsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  placementGroupResponse?: GetPlacementGroupsIdPlacementGroupResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
