import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    IcmpPing = "icmp-ping",
    Any = "any"
}


export class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=destinationPorts" })
  destinationPorts?: string[];

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
}

export enum UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1",
    Internet2 = "internet2"
}


export class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedInbound", elemType: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound })
  allowedInbound?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[];

  @SpeakeasyMetadata({ data: "json, name=lanIp" })
  lanIp: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=publicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "json, name=uplink" })
  uplink?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;
}


export class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules })
  rules: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceFirewallOneToOneNatRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallOneToOneNatRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJsonObject?: Map<string, any>;
}
