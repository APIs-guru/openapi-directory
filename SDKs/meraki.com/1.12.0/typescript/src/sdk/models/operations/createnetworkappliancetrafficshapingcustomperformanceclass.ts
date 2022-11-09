import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxJitter" })
  maxJitter?: number;

  @Metadata({ data: "json, name=maxLatency" })
  maxLatency?: number;

  @Metadata({ data: "json, name=maxLossPercentage" })
  maxLossPercentage?: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
}


export class CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJsonObject?: Map<string, any>;
}
