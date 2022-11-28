import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkApplianceTrafficShapingUplinkBandwidthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceTrafficShapingUplinkBandwidthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkApplianceTrafficShapingUplinkBandwidthPathParams;
}


export class GetNetworkApplianceTrafficShapingUplinkBandwidthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJsonObject?: Map<string, any>;
}
