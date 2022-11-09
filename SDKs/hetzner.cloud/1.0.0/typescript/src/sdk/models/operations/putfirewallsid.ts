import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutFirewallsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutFirewallsIdUpdateFirewallRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PutFirewallsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutFirewallsIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutFirewallsIdUpdateFirewallRequest;
}


export class PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}


export class PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=server" })
  server?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;

  @Metadata({ data: "json, name=type" })
  type?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}


export class PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


export class PutFirewallsIdFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
}


export class PutFirewallsIdFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_to_resources", elemType: operations.PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources })
  appliedToResources?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources[];

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: PutFirewallsIdFirewallResponseFirewallAppliedToServer;

  @Metadata({ data: "json, name=type" })
  type: PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum;
}

export enum PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum {
    In = "in"
,    Out = "out"
}

export enum PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Esp = "esp"
,    Gre = "gre"
}


export class PutFirewallsIdFirewallResponseFirewallRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @Metadata({ data: "json, name=direction" })
  direction: PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum;

  @Metadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class PutFirewallsIdFirewallResponseFirewall extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_to", elemType: operations.PutFirewallsIdFirewallResponseFirewallAppliedTo })
  appliedTo: PutFirewallsIdFirewallResponseFirewallAppliedTo[];

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rules", elemType: operations.PutFirewallsIdFirewallResponseFirewallRule })
  rules: PutFirewallsIdFirewallResponseFirewallRule[];
}


export class PutFirewallsIdFirewallResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=firewall" })
  firewall: PutFirewallsIdFirewallResponseFirewall;
}


export class PutFirewallsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firewallResponse?: PutFirewallsIdFirewallResponse;

  @Metadata()
  statusCode: number;
}
