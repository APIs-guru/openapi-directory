import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: number;
}


export class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams;

  @SpeakeasyMetadata()
  security: GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity;
}


export class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscriptionResponse?: shared.SubscriptionResponse;
}
