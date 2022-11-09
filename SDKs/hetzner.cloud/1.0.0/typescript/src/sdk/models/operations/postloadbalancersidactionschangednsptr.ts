import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsChangeDnsPtrPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dns_ptr" })
  dnsPtr: string;

  @Metadata({ data: "json, name=ip" })
  ip: string;
}


export class PostLoadBalancersIdActionsChangeDnsPtrRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsChangeDnsPtrPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest;
}


// PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources })
  resources: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsChangeDnsPtrActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction;
}


export class PostLoadBalancersIdActionsChangeDnsPtrResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsChangeDnsPtrActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
