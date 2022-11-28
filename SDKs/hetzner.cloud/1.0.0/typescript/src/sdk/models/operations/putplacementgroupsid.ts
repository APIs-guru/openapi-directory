import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutPlacementGroupsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutPlacementGroupsIdUpdatePlacementGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

export enum PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}


export class PutPlacementGroupsIdPlacementGroupResponsePlacementGroup extends SpeakeasyBase {
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
  type: PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum;
}


export class PutPlacementGroupsIdPlacementGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=placement_group" })
  placementGroup: PutPlacementGroupsIdPlacementGroupResponsePlacementGroup;
}


export class PutPlacementGroupsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPlacementGroupsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutPlacementGroupsIdUpdatePlacementGroupRequest;
}


export class PutPlacementGroupsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  placementGroupResponse?: PutPlacementGroupsIdPlacementGroupResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
