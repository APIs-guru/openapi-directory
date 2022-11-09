import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchStormControlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchStormControlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchStormControlPathParams;
}


export class GetNetworkSwitchStormControlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchStormControl200ApplicationJsonObject?: Map<string, any>;
}
