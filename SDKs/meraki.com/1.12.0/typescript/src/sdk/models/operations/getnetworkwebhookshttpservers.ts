import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWebhooksHttpServersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWebhooksHttpServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWebhooksHttpServersPathParams;
}


export class GetNetworkWebhooksHttpServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWebhooksHttpServers200ApplicationJsonObject?: Map<string, any>;
}
