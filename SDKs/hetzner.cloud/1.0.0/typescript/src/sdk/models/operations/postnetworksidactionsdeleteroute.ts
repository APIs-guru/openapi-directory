import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostNetworksIdActionsDeleteRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=gateway" })
  gateway: string;
}


// PostNetworksIdActionsDeleteRouteActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsDeleteRouteActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsDeleteRouteActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostNetworksIdActionsDeleteRouteActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostNetworksIdActionsDeleteRouteActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostNetworksIdActionsDeleteRouteActionResponseActionResources })
  resources: PostNetworksIdActionsDeleteRouteActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsDeleteRouteActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostNetworksIdActionsDeleteRouteActionResponseAction;
}


export class PostNetworksIdActionsDeleteRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostNetworksIdActionsDeleteRoutePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest;
}


export class PostNetworksIdActionsDeleteRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostNetworksIdActionsDeleteRouteActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
