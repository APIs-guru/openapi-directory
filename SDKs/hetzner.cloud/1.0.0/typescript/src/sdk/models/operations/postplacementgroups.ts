import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostPlacementGroupsCreatePlacementGroupRequestTypeEnum {
    Spread = "spread"
}


export class PostPlacementGroupsCreatePlacementGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: PostPlacementGroupsCreatePlacementGroupRequestTypeEnum;
}


export class PostPlacementGroupsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostPlacementGroupsCreatePlacementGroupRequest;
}


// PostPlacementGroupsCreatePlacementGroupResponseNullableActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostPlacementGroupsCreatePlacementGroupResponseNullableActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostPlacementGroupsCreatePlacementGroupResponseNullableAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostPlacementGroupsCreatePlacementGroupResponseNullableActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources })
  resources: PostPlacementGroupsCreatePlacementGroupResponseNullableActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostPlacementGroupsCreatePlacementGroupResponseNullableActionStatusEnum;
}

export enum PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum {
    Spread = "spread"
}


export class PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup extends SpeakeasyBase {
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
  type: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroupTypeEnum;
}


export class PostPlacementGroupsCreatePlacementGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: PostPlacementGroupsCreatePlacementGroupResponseNullableAction;

  @Metadata({ data: "json, name=placement_group" })
  placementGroup: PostPlacementGroupsCreatePlacementGroupResponsePlacementGroup;
}


export class PostPlacementGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createPlacementGroupResponse?: PostPlacementGroupsCreatePlacementGroupResponse;

  @Metadata()
  statusCode: number;
}
