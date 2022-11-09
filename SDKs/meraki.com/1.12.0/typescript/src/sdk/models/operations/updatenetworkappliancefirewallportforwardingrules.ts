import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceFirewallPortForwardingRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
}

export enum UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1"
,    Internet2 = "internet2"
,    Both = "both"
}


export class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedIps" })
  allowedIps: string[];

  @Metadata({ data: "json, name=lanIp" })
  lanIp: string;

  @Metadata({ data: "json, name=localPort" })
  localPort: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum;

  @Metadata({ data: "json, name=publicPort" })
  publicPort: string;

  @Metadata({ data: "json, name=uplink" })
  uplink?: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum;
}


export class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules })
  rules: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceFirewallPortForwardingRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceFirewallPortForwardingRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallPortForwardingRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceFirewallPortForwardingRules200ApplicationJsonObject?: Map<string, any>;
}
