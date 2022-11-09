import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceTrafficShapingRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceTrafficShapingRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceTrafficShapingRulesPathParams;
}


export class GetNetworkApplianceTrafficShapingRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceTrafficShapingRules200ApplicationJsonObject?: Map<string, any>;
}
