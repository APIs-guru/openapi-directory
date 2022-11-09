import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsRemoveTargetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector
/** 
 * Configuration for label selector targets, required if type is `label_selector`
**/
export class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


// PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer
/** 
 * Configuration for type Server, required if type is `server`
**/
export class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
,    Ip = "ip"
}


export class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp;

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer;

  @Metadata({ data: "json, name=type" })
  type: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum;
}


export class PostLoadBalancersIdActionsRemoveTargetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsRemoveTargetPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest;
}


// PostLoadBalancersIdActionsRemoveTargetActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsRemoveTargetActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsRemoveTargetActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsRemoveTargetActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources })
  resources: PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsRemoveTargetActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsRemoveTargetActionResponseAction;
}


export class PostLoadBalancersIdActionsRemoveTargetResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsRemoveTargetActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
