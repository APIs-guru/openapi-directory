import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostServersIdActionsRemoveFromPlacementGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostServersIdActionsRemoveFromPlacementGroupActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources })
  resources: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostServersIdActionsRemoveFromPlacementGroupActionResponseActionStatusEnum;
}


export class PostServersIdActionsRemoveFromPlacementGroupActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostServersIdActionsRemoveFromPlacementGroupActionResponseAction;
}


export class PostServersIdActionsRemoveFromPlacementGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostServersIdActionsRemoveFromPlacementGroupPathParams;
}


export class PostServersIdActionsRemoveFromPlacementGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostServersIdActionsRemoveFromPlacementGroupActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
