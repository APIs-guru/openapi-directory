import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxJitter" })
  maxJitter?: number;

  @SpeakeasyMetadata({ data: "json, name=maxLatency" })
  maxLatency?: number;

  @SpeakeasyMetadata({ data: "json, name=maxLossPercentage" })
  maxLossPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
}


export class CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJsonObject?: Map<string, any>;
}
