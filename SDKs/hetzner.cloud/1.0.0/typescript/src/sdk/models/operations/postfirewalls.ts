import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostFirewallsCreateFirewallRequestApplyToLabelSelector
/** 
 * Configuration for type LabelSelector, required if type is `label_selector`
**/
export class PostFirewallsCreateFirewallRequestApplyToLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


// PostFirewallsCreateFirewallRequestApplyToServer
/** 
 * Configuration for type Server, required if type is `server`
**/
export class PostFirewallsCreateFirewallRequestApplyToServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum PostFirewallsCreateFirewallRequestApplyToTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
}


export class PostFirewallsCreateFirewallRequestApplyTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: PostFirewallsCreateFirewallRequestApplyToLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: PostFirewallsCreateFirewallRequestApplyToServer;

  @Metadata({ data: "json, name=type" })
  type: PostFirewallsCreateFirewallRequestApplyToTypeEnum;
}

export enum PostFirewallsCreateFirewallRequestRuleDirectionEnum {
    In = "in"
,    Out = "out"
}

export enum PostFirewallsCreateFirewallRequestRuleProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Esp = "esp"
,    Gre = "gre"
}


export class PostFirewallsCreateFirewallRequestRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @Metadata({ data: "json, name=direction" })
  direction: PostFirewallsCreateFirewallRequestRuleDirectionEnum;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostFirewallsCreateFirewallRequestRuleProtocolEnum;

  @Metadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class PostFirewallsCreateFirewallRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=apply_to", elemType: operations.PostFirewallsCreateFirewallRequestApplyTo })
  applyTo?: PostFirewallsCreateFirewallRequestApplyTo[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rules", elemType: operations.PostFirewallsCreateFirewallRequestRule })
  rules?: PostFirewallsCreateFirewallRequestRule[];
}


export class PostFirewallsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostFirewallsCreateFirewallRequest;
}


// PostFirewallsCreateFirewallResponseActionError
/** 
 * Error message for the Action if error occurred, otherwise null
**/
export class PostFirewallsCreateFirewallResponseActionError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class PostFirewallsCreateFirewallResponseActionResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}

export enum PostFirewallsCreateFirewallResponseActionStatusEnum {
    Success = "success"
,    Running = "running"
,    Error = "error"
}


export class PostFirewallsCreateFirewallResponseAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=error" })
  error: PostFirewallsCreateFirewallResponseActionError;

  @Metadata({ data: "json, name=finished" })
  finished: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=progress" })
  progress: number;

  @Metadata({ data: "json, name=resources", elemType: operations.PostFirewallsCreateFirewallResponseActionResources })
  resources: PostFirewallsCreateFirewallResponseActionResources[];

  @Metadata({ data: "json, name=started" })
  started: string;

  @Metadata({ data: "json, name=status" })
  status: PostFirewallsCreateFirewallResponseActionStatusEnum;
}


export class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}


export class PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=server" })
  server?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesServer;

  @Metadata({ data: "json, name=type" })
  type?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}


export class PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


export class PostFirewallsCreateFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
}


export class PostFirewallsCreateFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_to_resources", elemType: operations.PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources })
  appliedToResources?: PostFirewallsCreateFirewallResponseFirewallAppliedToAppliedToResources[];

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: PostFirewallsCreateFirewallResponseFirewallAppliedToLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: PostFirewallsCreateFirewallResponseFirewallAppliedToServer;

  @Metadata({ data: "json, name=type" })
  type: PostFirewallsCreateFirewallResponseFirewallAppliedToTypeEnum;
}

export enum PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum {
    In = "in"
,    Out = "out"
}

export enum PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Esp = "esp"
,    Gre = "gre"
}


export class PostFirewallsCreateFirewallResponseFirewallRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @Metadata({ data: "json, name=direction" })
  direction: PostFirewallsCreateFirewallResponseFirewallRuleDirectionEnum;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum;

  @Metadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class PostFirewallsCreateFirewallResponseFirewall extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_to", elemType: operations.PostFirewallsCreateFirewallResponseFirewallAppliedTo })
  appliedTo: PostFirewallsCreateFirewallResponseFirewallAppliedTo[];

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rules", elemType: operations.PostFirewallsCreateFirewallResponseFirewallRule })
  rules: PostFirewallsCreateFirewallResponseFirewallRule[];
}


export class PostFirewallsCreateFirewallResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: operations.PostFirewallsCreateFirewallResponseAction })
  actions?: PostFirewallsCreateFirewallResponseAction[];

  @Metadata({ data: "json, name=firewall" })
  firewall?: PostFirewallsCreateFirewallResponseFirewall;
}


export class PostFirewallsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createFirewallResponse?: PostFirewallsCreateFirewallResponse;

  @Metadata()
  statusCode: number;
}
