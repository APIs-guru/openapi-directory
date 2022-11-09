import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular
/** 
 * The bandwidth settings for the 'cellular' uplink
**/
export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1
/** 
 * The bandwidth settings for the 'wan1' uplink
**/
export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2
/** 
 * The bandwidth settings for the 'wan2' uplink
**/
export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


// UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits
/** 
 * A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
**/
export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellular" })
  cellular?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular;

  @Metadata({ data: "json, name=wan1" })
  wan1?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1;

  @Metadata({ data: "json, name=wan2" })
  wan2?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2;
}


export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits;
}


export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody;
}


export class UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceTrafficShapingUplinkBandwidth200ApplicationJsonObject?: Map<string, any>;
}
