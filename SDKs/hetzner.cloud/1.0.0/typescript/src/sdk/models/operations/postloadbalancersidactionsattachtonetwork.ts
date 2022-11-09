import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsAttachToNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsAttachToNetworkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip?: string;

  @Metadata({ data: "json, name=network" })
  network: number;
}


export class PostLoadBalancersIdActionsAttachToNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsAttachToNetworkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsAttachToNetworkRequestBody;
}


// PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsAttachToNetworkActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources })
  resources: PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsAttachToNetworkActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsAttachToNetworkActionResponseAction;
}


export class PostLoadBalancersIdActionsAttachToNetworkResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsAttachToNetworkActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
