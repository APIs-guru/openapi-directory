import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidTrafficShapingRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidTrafficShapingRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidTrafficShapingRulesPathParams;
}


export class GetNetworkWirelessSsidTrafficShapingRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidTrafficShapingRules200ApplicationJsonObject?: Map<string, any>;
}
