import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWebhooksHttpServersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWebhooksHttpServersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWebhooksHttpServersPathParams;
}


export class GetNetworkWebhooksHttpServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWebhooksHttpServers200ApplicationJsonObject?: Map<string, any>;
}
