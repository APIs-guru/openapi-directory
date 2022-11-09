import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPlacementGroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPlacementGroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPlacementGroupsIdPathParams;
}

export enum GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}


export class GetPlacementGroupsIdPlacementGroupResponsePlacementGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=servers" })
  servers: number[];

  @Metadata({ data: "json, name=type" })
  type: GetPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum;
}


export class GetPlacementGroupsIdPlacementGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=placement_group" })
  placementGroup: GetPlacementGroupsIdPlacementGroupResponsePlacementGroup;
}


export class GetPlacementGroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  placementGroupResponse?: GetPlacementGroupsIdPlacementGroupResponse;

  @Metadata()
  statusCode: number;
}
