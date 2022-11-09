import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchMtuPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchMtuRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchMtuPathParams;
}


export class GetNetworkSwitchMtuResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchMtu200ApplicationJsonObject?: Map<string, any>;
}
