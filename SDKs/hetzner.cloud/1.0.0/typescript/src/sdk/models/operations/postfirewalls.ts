import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostFirewallsCreateFirewallRequestApplyToLabelSelector
/** 
 * Configuration for type LabelSelector, required if type is `label_selector`
**/
export class PostFirewallsCreateFirewallRequestApplyToLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


// PostFirewallsCreateFirewallRequestApplyToServer
/** 
 * Configuration for type Server, required if type is `server`
**/
export class PostFirewallsCreateFirewallRequestApplyToServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum PostFirewallsCreateFirewallRequestApplyToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}


export class PostFirewallsCreateFirewallRequestApplyTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: PostFirewallsCreateFirewallRequestApplyToLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostFirewallsCreateFirewallRequestApplyToServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostFirewallsCreateFirewallRequestApplyToTypeEnum;
}

export enum PostFirewallsCreateFirewallRequestRuleDirectionEnum {
    In = "in",
    Out = "out"
}

export enum PostFirewallsCreateFirewallRequestRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}


export class PostFirewallsCreateFirewallRequestRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction: PostFirewallsCreateFirewallRequestRuleDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PostFirewallsCreateFirewallRequestRuleProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class PostFirewallsCreateFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apply_to", elemType: PostFirewallsCreateFirewallRequestApplyTo })
  applyTo?: PostFirewallsCreateFirewallRequestApplyTo[];

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: PostFirewallsCreateFirewallRequestRule })
  rules?: PostFirewallsCreateFirewallRequestRule[];
}


// PostFirewallsCreateFirewallResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFirewallsCreateFirewallResponseActionError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class PostFirewallsCreateFirewallResponseActionResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum PostFirewallsCreateFirewallResponseActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}


export class PostFirewallsCreateFirewallResponseAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error: PostFirewallsCreateFirewallResponseActionError;

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress: number;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFirewallsCreateFirewallResponseActionResources })
  resources: PostFirewallsCreateFirewallResponseActionResources[];

  @SpeakeasyMetadata({ data: "json, name=started" })
  started: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PostFirewallsCreateFirewallResponseActionStatusEnum;
}


export class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}


export class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}


export class PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


export class PostFirewallsCreateFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}


export class PostFirewallsCreateFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applied_to_resources", elemType: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources })
  appliedToResources?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources[];

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PostFirewallsCreateFirewallResponseFirewallAppliedToServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum;
}

export enum PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}

export enum PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}


export class PostFirewallsCreateFirewallResponseFirewallRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction: PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class PostFirewallsCreateFirewallResponseFirewall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applied_to", elemType: PostFirewallsCreateFirewallResponseFirewallAppliedTo })
  appliedTo: PostFirewallsCreateFirewallResponseFirewallAppliedTo[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: PostFirewallsCreateFirewallResponseFirewallRule })
  rules: PostFirewallsCreateFirewallResponseFirewallRule[];
}


export class PostFirewallsCreateFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: PostFirewallsCreateFirewallResponseAction })
  actions?: PostFirewallsCreateFirewallResponseAction[];

  @SpeakeasyMetadata({ data: "json, name=firewall" })
  firewall?: PostFirewallsCreateFirewallResponseFirewall;
}


export class PostFirewallsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostFirewallsCreateFirewallRequest;
}


export class PostFirewallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createFirewallResponse?: PostFirewallsCreateFirewallResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
