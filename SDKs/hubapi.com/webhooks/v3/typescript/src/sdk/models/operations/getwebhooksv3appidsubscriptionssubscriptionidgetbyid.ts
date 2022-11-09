import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: number;
}


export class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams;

  @Metadata()
  security: GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity;
}


export class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptionResponse?: shared.SubscriptionResponse;
}
