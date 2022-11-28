import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWebhooksHttpServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=httpServerId" })
  httpServerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkWebhooksHttpServerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sharedSecret" })
  sharedSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class UpdateNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWebhooksHttpServerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWebhooksHttpServerRequestBody;
}


export class UpdateNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWebhooksHttpServer200ApplicationJsonObject?: Map<string, any>;
}
