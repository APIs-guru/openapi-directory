import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceTrafficShapingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits
/** 
 * Global per-client bandwidth limit
**/
export class UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


export class UpdateNetworkApplianceTrafficShapingRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=globalBandwidthLimits" })
  globalBandwidthLimits?: UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits;
}


export class UpdateNetworkApplianceTrafficShapingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceTrafficShapingPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceTrafficShapingRequestBody;
}


export class UpdateNetworkApplianceTrafficShapingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceTrafficShaping200ApplicationJsonObject?: Map<string, any>;
}
