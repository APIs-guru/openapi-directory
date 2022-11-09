import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceTrafficShapingCustomPerformanceClassPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customPerformanceClassId" })
  customPerformanceClassId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;
}


export class GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJsonObject?: Map<string, any>;
}
