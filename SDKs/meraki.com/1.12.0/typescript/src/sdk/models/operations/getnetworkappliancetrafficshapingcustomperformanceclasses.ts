import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams;
}


export class GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJsonObject?: Map<string, any>;
}
