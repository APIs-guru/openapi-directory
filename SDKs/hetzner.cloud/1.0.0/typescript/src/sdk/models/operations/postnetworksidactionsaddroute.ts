import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostNetworksIdActionsAddRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostNetworksIdActionsAddRouteAddDeleteRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;
}


// PostNetworksIdActionsAddRouteActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsAddRouteActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsAddRouteActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsAddRouteActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostNetworksIdActionsAddRouteActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostNetworksIdActionsAddRouteActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostNetworksIdActionsAddRouteActionResponseActionResources })
  resources: PostNetworksIdActionsAddRouteActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostNetworksIdActionsAddRouteActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsAddRouteActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostNetworksIdActionsAddRouteActionResponseAction;
}


export class PostNetworksIdActionsAddRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostNetworksIdActionsAddRoutePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsAddRouteAddDeleteRouteRequest;
}


export class PostNetworksIdActionsAddRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostNetworksIdActionsAddRouteActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
