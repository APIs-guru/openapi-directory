import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceTrafficShapingUplinkBandwidthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceTrafficShapingUplinkBandwidthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceTrafficShapingUplinkBandwidthPathParams;
}


export class GetNetworkApplianceTrafficShapingUplinkBandwidthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJsonObject?: Map<string, any>;
}
