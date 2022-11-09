import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum {
    Deny = "deny"
}

export enum UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum {
    Application = "application"
,    ApplicationCategory = "applicationCategory"
,    Host = "host"
,    Port = "port"
,    IpRange = "ipRange"
}


export class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;

  @Metadata({ data: "json, name=type" })
  type?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules })
  rules?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules[];
}


export class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
}


export class UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
