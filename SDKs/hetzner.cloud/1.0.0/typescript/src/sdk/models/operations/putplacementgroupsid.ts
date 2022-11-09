import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutPlacementGroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutPlacementGroupsIdUpdatePlacementGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PutPlacementGroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutPlacementGroupsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutPlacementGroupsIdUpdatePlacementGroupRequest;
}

export enum PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}


export class PutPlacementGroupsIdPlacementGroupResponsePlacementGroup extends SpeakeasyBase {
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
  type: PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum;
}


export class PutPlacementGroupsIdPlacementGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=placement_group" })
  placementGroup: PutPlacementGroupsIdPlacementGroupResponsePlacementGroup;
}


export class PutPlacementGroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  placementGroupResponse?: PutPlacementGroupsIdPlacementGroupResponse;

  @Metadata()
  statusCode: number;
}
