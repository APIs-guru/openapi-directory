import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidFirewallL3FirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidFirewallL3FirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidFirewallL3FirewallRulesPathParams;
}


export class GetNetworkWirelessSsidFirewallL3FirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
