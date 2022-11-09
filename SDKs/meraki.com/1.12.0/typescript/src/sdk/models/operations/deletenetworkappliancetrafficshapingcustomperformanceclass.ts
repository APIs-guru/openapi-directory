import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customPerformanceClassId" })
  customPerformanceClassId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams;
}


export class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
