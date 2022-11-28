import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular
/** 
 * The bandwidth settings for the 'cellular' uplink
**/
export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1
/** 
 * The bandwidth settings for the 'wan1' uplink
**/
export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2
/** 
 * The bandwidth settings for the 'wan2' uplink
**/
export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits
/** 
 * A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
**/
export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellular" })
  cellular?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;

  @SpeakeasyMetadata({ data: "json, name=wan1" })
  wan1?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;

  @SpeakeasyMetadata({ data: "json, name=wan2" })
  wan2?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;
}


export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
}


export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
}


export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJsonObject?: Map<string, any>;
}
