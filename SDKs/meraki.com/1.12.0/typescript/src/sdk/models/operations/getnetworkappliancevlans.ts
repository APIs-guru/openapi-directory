import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceVlansPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceVlansRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceVlansPathParams;
}


export class GetNetworkApplianceVlansResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceVlans200ApplicationJsonObject?: Map<string, any>;
}
