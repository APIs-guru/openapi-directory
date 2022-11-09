import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostNetworksIdActionsAddRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostNetworksIdActionsAddRouteAddDeleteRouteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: string;

  @Metadata({ data: "json, name=gateway" })
  gateway: string;
}


export class PostNetworksIdActionsAddRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostNetworksIdActionsAddRoutePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsAddRouteAddDeleteRouteRequest;
}


// PostNetworksIdActionsAddRouteActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsAddRouteActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsAddRouteActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsAddRouteActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostNetworksIdActionsAddRouteActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostNetworksIdActionsAddRouteActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostNetworksIdActionsAddRouteActionResponseActionResources })
  resources: PostNetworksIdActionsAddRouteActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostNetworksIdActionsAddRouteActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsAddRouteActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostNetworksIdActionsAddRouteActionResponseAction;
}


export class PostNetworksIdActionsAddRouteResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostNetworksIdActionsAddRouteActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
