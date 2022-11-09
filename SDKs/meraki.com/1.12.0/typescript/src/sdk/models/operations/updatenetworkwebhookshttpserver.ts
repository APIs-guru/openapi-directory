import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWebhooksHttpServerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=httpServerId" })
  httpServerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkWebhooksHttpServerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sharedSecret" })
  sharedSecret?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class UpdateNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWebhooksHttpServerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWebhooksHttpServerRequestBody;
}


export class UpdateNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWebhooksHttpServer200ApplicationJsonObject?: Map<string, any>;
}
