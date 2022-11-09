import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    IcmpPing = "icmp-ping"
,    Any = "any"
}


export class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];

  @Metadata({ data: "json, name=destinationPorts" })
  destinationPorts?: string[];

  @Metadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
}

export enum UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1"
,    Internet2 = "internet2"
}


export class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedInbound", elemType: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound })
  allowedInbound?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[];

  @Metadata({ data: "json, name=lanIp" })
  lanIp: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publicIp" })
  publicIp?: string;

  @Metadata({ data: "json, name=uplink" })
  uplink?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;
}


export class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules })
  rules: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceFirewallOneToOneNatRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallOneToOneNatRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJsonObject?: Map<string, any>;
}
