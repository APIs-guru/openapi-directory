import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWebhooksV3AppIdSubscriptionsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PostWebhooksV3AppIdSubscriptionsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PostWebhooksV3AppIdSubscriptionsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWebhooksV3AppIdSubscriptionsCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubscriptionCreateRequest;

  @SpeakeasyMetadata()
  security: PostWebhooksV3AppIdSubscriptionsCreateSecurity;
}


export class PostWebhooksV3AppIdSubscriptionsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscriptionResponse?: shared.SubscriptionResponse;
}
