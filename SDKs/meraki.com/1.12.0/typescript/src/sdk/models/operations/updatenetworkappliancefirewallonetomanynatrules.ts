import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
}


export class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];

  @Metadata({ data: "json, name=localIp" })
  localIp?: string;

  @Metadata({ data: "json, name=localPort" })
  localPort?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;

  @Metadata({ data: "json, name=publicPort" })
  publicPort?: string;
}

export enum UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1"
,    Internet2 = "internet2"
}


export class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=portRules", elemType: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules })
  portRules: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[];

  @Metadata({ data: "json, name=publicIp" })
  publicIp: string;

  @Metadata({ data: "json, name=uplink" })
  uplink: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;
}


export class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules })
  rules: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceFirewallOneToManyNatRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallOneToManyNatRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJsonObject?: Map<string, any>;
}
