import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceVlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vlanId" })
  vlanId: string;
}


export class GetNetworkApplianceVlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceVlanPathParams;
}


export class GetNetworkApplianceVlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceVlan200ApplicationJsonObject?: Map<string, any>;
}
