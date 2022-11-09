import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostLoadBalancersIdActionsAddTargetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostLoadBalancersIdActionsAddTargetAddTargetRequestIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class PostLoadBalancersIdActionsAddTargetAddTargetRequestIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip: string;
}


// PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector
/** 
 * Configuration for label selector targets, required if type is `label_selector`
**/
export class PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


// PostLoadBalancersIdActionsAddTargetAddTargetRequestServer
/** 
 * Configuration for type Server, required if type is `server`
**/
export class PostLoadBalancersIdActionsAddTargetAddTargetRequestServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
,    Ip = "ip"
}


export class PostLoadBalancersIdActionsAddTargetAddTargetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip?: PostLoadBalancersIdActionsAddTargetAddTargetRequestIp;

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: PostLoadBalancersIdActionsAddTargetAddTargetRequestServer;

  @Metadata({ data: "json, name=type" })
  type: PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum;

  @Metadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


export class PostLoadBalancersIdActionsAddTargetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLoadBalancersIdActionsAddTargetPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsAddTargetAddTargetRequest;
}


// PostLoadBalancersIdActionsAddTargetActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsAddTargetActionResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsAddTargetActionResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostLoadBalancersIdActionsAddTargetActionResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsAddTargetActionResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostLoadBalancersIdActionsAddTargetActionResponseActionResources })
  resources: PostLoadBalancersIdActionsAddTargetActionResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsAddTargetActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsAddTargetActionResponseAction;
}


export class PostLoadBalancersIdActionsAddTargetResponse extends SpeakeasyBase {
  @Metadata()
  actionResponse?: PostLoadBalancersIdActionsAddTargetActionResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
