import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostNetworksIdActionsDeleteRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: string;

  @Metadata({ data: "json, name=gateway" })
  gateway: string;
}


export class PostNetworksIdActionsDeleteRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostNetworksIdActionsDeleteRoutePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostNetworksIdActionsDeleteRouteAddDeleteRouteRequest;
}


// PostNetworksIdActionsDeleteRouteActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostNetworksIdActionsDeleteRouteActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostNetworksIdActionsDeleteRouteActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostNetworksIdActionsDeleteRouteActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostNetworksIdActionsDeleteRouteActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostNetworksIdActionsDeleteRouteActionResponseActionResources })
  resources: PostNetworksIdActionsDeleteRouteActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostNetworksIdActionsDeleteRouteActionResponseActionStatusEnum;
}


export class PostNetworksIdActionsDeleteRouteActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostNetworksIdActionsDeleteRouteActionResponseAction;
}


export class PostNetworksIdActionsDeleteRouteResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostNetworksIdActionsDeleteRouteActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
