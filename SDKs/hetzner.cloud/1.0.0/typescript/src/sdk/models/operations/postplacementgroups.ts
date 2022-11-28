import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostPlacementGroupsCreatePlacementGroupRequestTypeEnum {
    Spread = "spread"
}


export class PostPlacementGroupsCreatePlacementGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostPlacementGroupsCreatePlacementGroupRequestTypeEnum;
}


// PostPlacementGroupsCreatePlacementGroupResponseNullableActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostPlacementGroupsCreatePlacementGroupResponseNullableActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostPlacementGroupsCreatePlacementGroupResponseNullableAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostPlacementGroupsCreatePlacementGroupResponseNullableActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources })
  resources: PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum;
}

export enum PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}


export class PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup extends SpeakeasyBase {
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
  type: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum;
}


export class PostPlacementGroupsCreatePlacementGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: PostPlacementGroupsCreatePlacementGroupResponseNullableAction;

  @SpeakeasyMetadata({ data: "json, name=placement_group" })
  placementGroup: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup;
}


export class PostPlacementGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostPlacementGroupsCreatePlacementGroupRequest;
}


export class PostPlacementGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createPlacementGroupResponse?: PostPlacementGroupsCreatePlacementGroupResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
