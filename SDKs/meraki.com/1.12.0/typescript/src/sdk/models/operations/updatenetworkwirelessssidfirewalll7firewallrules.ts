import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum {
    Deny = "deny"
}

export enum UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange"
}


export class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules })
  rules?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules[];
}


export class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
}


export class UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
