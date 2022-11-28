import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLoadBalancersIdActionsAddTargetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostLoadBalancersIdActionsAddTargetAddTargetRequestIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class PostLoadBalancersIdActionsAddTargetAddTargetRequestIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector
/** 
 * Configuration for label selector targets, required if type is `label_selector`
**/
export class PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


// PostLoadBalancersIdActionsAddTargetAddTargetRequestServer
/** 
 * Configuration for type Server, required if type is `server`
**/
export class PostLoadBalancersIdActionsAddTargetAddTargetRequestServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}


export class PostLoadBalancersIdActionsAddTargetAddTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: PostLoadBalancersIdActionsAddTargetAddTargetRequestIp;

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostLoadBalancersIdActionsAddTargetAddTargetRequestServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=use_private_ip" })
  usePrivateIp?: boolean;
}


// PostLoadBalancersIdActionsAddTargetActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsAddTargetActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsAddTargetActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostLoadBalancersIdActionsAddTargetActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsAddTargetActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsAddTargetActionResponseActionResources })
  resources: PostLoadBalancersIdActionsAddTargetActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsAddTargetActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsAddTargetActionResponseAction;
}


export class PostLoadBalancersIdActionsAddTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLoadBalancersIdActionsAddTargetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsAddTargetAddTargetRequest;
}


export class PostLoadBalancersIdActionsAddTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostLoadBalancersIdActionsAddTargetActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
