import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFirewallsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}


export class GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}


export class GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


export class GetFirewallsIdFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}


export class GetFirewallsIdFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applied_to_resources", elemType: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources })
  appliedToResources?: GetFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources[];

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: GetFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: GetFirewallsIdFirewallResponseFirewallAppliedToServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: GetFirewallsIdFirewallResponseFirewallAppliedToTypeEnum;
}

export enum GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}

export enum GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}


export class GetFirewallsIdFirewallResponseFirewallRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction: GetFirewallsIdFirewallResponseFirewallRuleDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class GetFirewallsIdFirewallResponseFirewall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applied_to", elemType: GetFirewallsIdFirewallResponseFirewallAppliedTo })
  appliedTo: GetFirewallsIdFirewallResponseFirewallAppliedTo[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GetFirewallsIdFirewallResponseFirewallRule })
  rules: GetFirewallsIdFirewallResponseFirewallRule[];
}


export class GetFirewallsIdFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firewall" })
  firewall: GetFirewallsIdFirewallResponseFirewall;
}


export class GetFirewallsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFirewallsIdPathParams;
}


export class GetFirewallsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firewallResponse?: GetFirewallsIdFirewallResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
