import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchStacksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchStacksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchStacksPathParams;
}


export class GetNetworkSwitchStacksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchStacks200ApplicationJsonObject?: Map<string, any>;
}
