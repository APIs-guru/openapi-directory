import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostServersIdActionsRemoveFromPlacementGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostServersIdActionsRemoveFromPlacementGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostServersIdActionsRemoveFromPlacementGroupPathParams;
}


// PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostServersIdActionsRemoveFromPlacementGroupActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources })
  resources: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum;
}


export class PostServersIdActionsRemoveFromPlacementGroupActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostServersIdActionsRemoveFromPlacementGroupActionResponseAction;
}


export class PostServersIdActionsRemoveFromPlacementGroupResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostServersIdActionsRemoveFromPlacementGroupActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
