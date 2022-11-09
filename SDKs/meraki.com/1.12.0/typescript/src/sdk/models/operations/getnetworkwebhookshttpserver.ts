import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWebhooksHttpServerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=httpServerId" })
  httpServerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWebhooksHttpServerPathParams;
}


export class GetNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWebhooksHttpServer200ApplicationJsonObject?: Map<string, any>;
}
