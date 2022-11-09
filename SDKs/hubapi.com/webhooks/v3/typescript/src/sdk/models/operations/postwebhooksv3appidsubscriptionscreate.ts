import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWebhooksV3AppIdSubscriptionsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PostWebhooksV3AppIdSubscriptionsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PostWebhooksV3AppIdSubscriptionsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWebhooksV3AppIdSubscriptionsCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SubscriptionCreateRequest;

  @Metadata()
  security: PostWebhooksV3AppIdSubscriptionsCreateSecurity;
}


export class PostWebhooksV3AppIdSubscriptionsCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptionResponse?: shared.SubscriptionResponse;
}
