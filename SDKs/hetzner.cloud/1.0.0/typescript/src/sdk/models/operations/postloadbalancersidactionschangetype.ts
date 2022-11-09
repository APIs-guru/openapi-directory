import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsChangeTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsChangeTypeChangeTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=load_balancer_type" })
  loadBalancerType: string;
}


export class PostLoadBalancersIdActionsChangeTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsChangeTypePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsChangeTypeChangeTypeRequest;
}


// PostLoadBalancersIdActionsChangeTypeActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsChangeTypeActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsChangeTypeActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsChangeTypeActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsChangeTypeActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsChangeTypeActionResponseActionResources })
  resources: PostLoadBalancersIdActionsChangeTypeActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsChangeTypeActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsChangeTypeActionResponseAction;
}


export class PostLoadBalancersIdActionsChangeTypeResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsChangeTypeActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
