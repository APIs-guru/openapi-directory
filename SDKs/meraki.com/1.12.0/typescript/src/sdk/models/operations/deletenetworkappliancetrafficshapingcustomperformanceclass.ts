import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customPerformanceClassId" })
  customPerformanceClassId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;
}


export class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
