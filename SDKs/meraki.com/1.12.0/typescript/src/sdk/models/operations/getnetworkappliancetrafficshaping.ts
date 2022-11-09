import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceTrafficShapingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceTrafficShapingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceTrafficShapingPathParams;
}


export class GetNetworkApplianceTrafficShapingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceTrafficShaping200ApplicationJsonObject?: Map<string, any>;
}
