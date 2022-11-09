import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkAppliancePortsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkAppliancePortsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkAppliancePortsPathParams;
}


export class GetNetworkAppliancePortsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkAppliancePorts200ApplicationJsonObject?: Map<string, any>;
}
