import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkAppliancePortsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkAppliancePortsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkAppliancePortsPathParams;
}


export class GetNetworkAppliancePortsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkAppliancePorts200ApplicationJsonObject?: Map<string, any>;
}
