import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLoadBalancersIdActionsChangeDnsPtrPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources })
  resources: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction;
}


export class PostLoadBalancersIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLoadBalancersIdActionsChangeDnsPtrPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest;
}


export class PostLoadBalancersIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostLoadBalancersIdActionsChangeDnsPtrActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
