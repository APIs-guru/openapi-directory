import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customPerformanceClassId" })
  customPerformanceClassId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxJitter" })
  maxJitter?: number;

  @SpeakeasyMetadata({ data: "json, name=maxLatency" })
  maxLatency?: number;

  @SpeakeasyMetadata({ data: "json, name=maxLossPercentage" })
  maxLossPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
}


export class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJsonObject?: Map<string, any>;
}
