import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceFirewallPortForwardingRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}

export enum UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1",
    Internet2 = "internet2",
    Both = "both"
}


export class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedIps" })
  allowedIps: string[];

  @SpeakeasyMetadata({ data: "json, name=lanIp" })
  lanIp: string;

  @SpeakeasyMetadata({ data: "json, name=localPort" })
  localPort: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=publicPort" })
  publicPort: string;

  @SpeakeasyMetadata({ data: "json, name=uplink" })
  uplink?: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum;
}


export class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules })
  rules: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceFirewallPortForwardingRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceFirewallPortForwardingRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallPortForwardingRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceFirewallPortForwardingRules200ApplicationJsonObject?: Map<string, any>;
}
