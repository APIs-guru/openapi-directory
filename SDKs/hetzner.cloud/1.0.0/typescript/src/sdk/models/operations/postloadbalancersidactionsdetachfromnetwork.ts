import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsDetachFromNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsDetachFromNetworkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network: number;
}


export class PostLoadBalancersIdActionsDetachFromNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsDetachFromNetworkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsDetachFromNetworkRequestBody;
}


// PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources })
  resources: PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsDetachFromNetworkActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction;
}


export class PostLoadBalancersIdActionsDetachFromNetworkResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsDetachFromNetworkActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
