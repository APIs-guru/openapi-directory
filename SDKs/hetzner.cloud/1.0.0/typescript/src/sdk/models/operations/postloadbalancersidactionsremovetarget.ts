import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLoadBalancersIdActionsRemoveTargetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


// PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp
/** 
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
export class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;
}


// PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector
/** 
 * Configuration for label selector targets, required if type is `label_selector`
**/
export class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


// PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer
/** 
 * Configuration for type Server, required if type is `server`
**/
export class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum {
    Server = "server",
    LabelSelector = "label_selector",
    Ip = "ip"
}


export class PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp;

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum;
}


// PostLoadBalancersIdActionsRemoveTargetActionResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostLoadBalancersIdActionsRemoveTargetActionResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostLoadBalancersIdActionsRemoveTargetActionResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostLoadBalancersIdActionsRemoveTargetActionResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources })
  resources: PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum;
}


export class PostLoadBalancersIdActionsRemoveTargetActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PostLoadBalancersIdActionsRemoveTargetActionResponseAction;
}


export class PostLoadBalancersIdActionsRemoveTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLoadBalancersIdActionsRemoveTargetPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest;
}


export class PostLoadBalancersIdActionsRemoveTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionResponse?: PostLoadBalancersIdActionsRemoveTargetActionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
