import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: number;
}


export class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams;

  @SpeakeasyMetadata()
  security: DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity;
}


export class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
