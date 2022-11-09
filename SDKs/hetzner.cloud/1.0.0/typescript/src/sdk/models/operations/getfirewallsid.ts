import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFirewallsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFirewallsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFirewallsIdPathParams;
}


export class GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}


export class GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=server" })
  server?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;

  @Metadata({ data: "json, name=type" })
  type?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}


export class GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=selector" })
  selector: string;
}


export class GetFirewallsIdFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;
}

export enum GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server"
,    LabelSelector = "label_selector"
}


export class GetFirewallsIdFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_to_resources", elemType: operations.GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources })
  appliedToResources?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources[];

  @Metadata({ data: "json, name=label_selector" })
  labelSelector?: GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;

  @Metadata({ data: "json, name=server" })
  server?: GetFirewallsIdFirewallResponseFirewallAppliedToServer;

  @Metadata({ data: "json, name=type" })
  type: GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum;
}

export enum GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum {
    In = "in"
,    Out = "out"
}

export enum GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Esp = "esp"
,    Gre = "gre"
}


export class GetFirewallsIdFirewallResponseFirewallRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @Metadata({ data: "json, name=direction" })
  direction: GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum;

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum;

  @Metadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class GetFirewallsIdFirewallResponseFirewall extends SpeakeasyBase {
  @Metadata({ data: "json, name=applied_to", elemType: operations.GetFirewallsIdFirewallResponseFirewallAppliedTo })
  appliedTo: GetFirewallsIdFirewallResponseFirewallAppliedTo[];

  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rules", elemType: operations.GetFirewallsIdFirewallResponseFirewallRule })
  rules: GetFirewallsIdFirewallResponseFirewallRule[];
}


export class GetFirewallsIdFirewallResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=firewall" })
  firewall: GetFirewallsIdFirewallResponseFirewall;
}


export class GetFirewallsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firewallResponse?: GetFirewallsIdFirewallResponse;

  @Metadata()
  statusCode: number;
}
