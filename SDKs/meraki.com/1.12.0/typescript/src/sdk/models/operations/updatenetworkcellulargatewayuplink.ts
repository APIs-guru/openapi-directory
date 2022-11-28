import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkCellularGatewayUplinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits
/** 
 * The bandwidth settings for the 'cellular' uplink
**/
export class UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitDown" })
  limitDown?: number;

  @SpeakeasyMetadata({ data: "json, name=limitUp" })
  limitUp?: number;
}


export class UpdateNetworkCellularGatewayUplinkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidthLimits" })
  bandwidthLimits?: UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits;
}


export class UpdateNetworkCellularGatewayUplinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkCellularGatewayUplinkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCellularGatewayUplinkRequestBody;
}


export class UpdateNetworkCellularGatewayUplinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkCellularGatewayUplink200ApplicationJsonObject?: Map<string, any>;
}
