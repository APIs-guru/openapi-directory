import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceTrafficShapingUplinkSelectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceTrafficShapingUplinkSelectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceTrafficShapingUplinkSelectionPathParams;
}


export class GetNetworkApplianceTrafficShapingUplinkSelectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceTrafficShapingUplinkSelection200ApplicationJsonObject?: Map<string, any>;
}
