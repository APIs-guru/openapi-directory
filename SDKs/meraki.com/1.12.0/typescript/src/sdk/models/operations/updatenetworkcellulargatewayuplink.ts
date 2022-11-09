import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkCellularGatewayUplinkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits
/** 
 * The bandwidth settings for the 'cellular' uplink
**/
export class UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @Metadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


export class UpdateNetworkCellularGatewayUplinkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits;
}


export class UpdateNetworkCellularGatewayUplinkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkCellularGatewayUplinkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCellularGatewayUplinkRequestBody;
}


export class UpdateNetworkCellularGatewayUplinkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkCellularGatewayUplink200ApplicationJsonObject?: Map<string, any>;
}
