import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceTrafficShapingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits
/** 
 * Global per-client bandwidth limit
**/
export class UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


export class UpdateNetworkApplianceTrafficShapingRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=globalBandwidthLimits" })
  globalBandwidthLimits?: UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits;
}


export class UpdateNetworkApplianceTrafficShapingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceTrafficShapingPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceTrafficShapingRequestBody;
}


export class UpdateNetworkApplianceTrafficShapingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceTrafficShaping200ApplicationJsonObject?: Map<string, any>;
}
