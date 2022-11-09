import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchStpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchStpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchStpPathParams;
}


export class GetNetworkSwitchStpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchStp200ApplicationJsonObject?: Map<string, any>;
}
