import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkWebhooksHttpServerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=httpServerId" })
  httpServerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkWebhooksHttpServerPathParams;
}


export class DeleteNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
