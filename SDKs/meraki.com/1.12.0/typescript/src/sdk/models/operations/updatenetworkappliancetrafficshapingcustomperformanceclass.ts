import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customPerformanceClassId" })
  customPerformanceClassId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxJitter" })
  maxJitter?: number;

  @Metadata({ data: "json, name=maxLatency" })
  maxLatency?: number;

  @Metadata({ data: "json, name=maxLossPercentage" })
  maxLossPercentage?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
}


export class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJsonObject?: Map<string, any>;
}
