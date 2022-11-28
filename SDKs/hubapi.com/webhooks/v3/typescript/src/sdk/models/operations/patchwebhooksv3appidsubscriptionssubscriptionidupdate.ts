import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: number;
}


export class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubscriptionPatchRequest;

  @SpeakeasyMetadata()
  security: PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity;
}


export class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscriptionResponse?: shared.SubscriptionResponse;
}
