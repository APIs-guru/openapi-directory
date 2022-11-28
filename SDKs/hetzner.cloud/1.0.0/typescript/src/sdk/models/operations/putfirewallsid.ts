import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutFirewallsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutFirewallsIdUpdateFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum {
    Server = "server"
}


export class PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResourcesTypeEnum;
}


export class PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector: string;
}


export class PutFirewallsIdFirewallResponseFirewallAppliedToServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;
}

export enum PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum {
    Server = "server",
    LabelSelector = "label_selector"
}


export class PutFirewallsIdFirewallResponseFirewallAppliedTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applied_to_resources", elemType: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources })
  appliedToResources?: PutFirewallsIdFirewallResponseFirewallAppliedToAppliedToResources[];

  @SpeakeasyMetadata({ data: "json, name=label_selector" })
  labelSelector?: PutFirewallsIdFirewallResponseFirewallAppliedToLabelSelector;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: PutFirewallsIdFirewallResponseFirewallAppliedToServer;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PutFirewallsIdFirewallResponseFirewallAppliedToTypeEnum;
}

export enum PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum {
    In = "in",
    Out = "out"
}

export enum PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Esp = "esp",
    Gre = "gre"
}


export class PutFirewallsIdFirewallResponseFirewallRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_ips" })
  destinationIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction: PutFirewallsIdFirewallResponseFirewallRuleDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=source_ips" })
  sourceIps?: string[];
}


export class PutFirewallsIdFirewallResponseFirewall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applied_to", elemType: PutFirewallsIdFirewallResponseFirewallAppliedTo })
  appliedTo: PutFirewallsIdFirewallResponseFirewallAppliedTo[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: PutFirewallsIdFirewallResponseFirewallRule })
  rules: PutFirewallsIdFirewallResponseFirewallRule[];
}


export class PutFirewallsIdFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firewall" })
  firewall: PutFirewallsIdFirewallResponseFirewall;
}


export class PutFirewallsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutFirewallsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutFirewallsIdUpdateFirewallRequest;
}


export class PutFirewallsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firewallResponse?: PutFirewallsIdFirewallResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
