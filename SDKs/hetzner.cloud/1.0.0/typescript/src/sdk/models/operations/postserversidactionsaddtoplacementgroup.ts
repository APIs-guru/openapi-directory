import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsAddToPlacementGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=placement_group" })
  placementGroup: number;
}


export class PostServersIdActionsAddToPlacementGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsAddToPlacementGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostServersIdActionsAddToPlacementGroupAddToPlacementGroupRequest;
}


// PostServersIdActionsAddToPlacementGroupActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsAddToPlacementGroupActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsAddToPlacementGroupActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsAddToPlacementGroupActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsAddToPlacementGroupActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsAddToPlacementGroupActionResponseActionResources })
  resources: PostServersIdActionsAddToPlacementGroupActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsAddToPlacementGroupActionResponseActionStatusEnum;
}


export class PostServersIdActionsAddToPlacementGroupActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsAddToPlacementGroupActionResponseAction;
}


export class PostServersIdActionsAddToPlacementGroupResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsAddToPlacementGroupActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
