import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}


export class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=localIp" })
  localIp?: string;

  @SpeakeasyMetadata({ data: "json, name=localPort" })
  localPort?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=publicPort" })
  publicPort?: string;
}

export enum UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1",
    Internet2 = "internet2"
}


export class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=portRules", elemType: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules })
  portRules: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[];

  @SpeakeasyMetadata({ data: "json, name=publicIp" })
  publicIp: string;

  @SpeakeasyMetadata({ data: "json, name=uplink" })
  uplink: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;
}


export class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules })
  rules: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceFirewallOneToManyNatRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallOneToManyNatRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJsonObject?: Map<string, any>;
}
