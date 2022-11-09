import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: number;
}


export class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams;

  @Metadata()
  security: DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity;
}


export class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
