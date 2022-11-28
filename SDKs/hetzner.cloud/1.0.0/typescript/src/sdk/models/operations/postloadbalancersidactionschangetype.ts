import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLoadBalancersIdActionsChangeTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsChangeTypeChangeTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=load_balancer_type" })
  loadBalancerType: string;
}


// PostLoadBalancersIdActionsChangeTypeActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsChangeTypeActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsChangeTypeActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostLoadBalancersIdActionsChangeTypeActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsChangeTypeActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsChangeTypeActionResponseActionResources })
  resources: PostLoadBalancersIdActionsChangeTypeActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsChangeTypeActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsChangeTypeActionResponseAction;
}


export class PostLoadBalancersIdActionsChangeTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLoadBalancersIdActionsChangeTypePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsChangeTypeChangeTypeRequest;
}


export class PostLoadBalancersIdActionsChangeTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostLoadBalancersIdActionsChangeTypeActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
