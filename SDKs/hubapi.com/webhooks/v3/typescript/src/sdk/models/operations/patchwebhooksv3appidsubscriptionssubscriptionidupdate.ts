import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriptionId" })
  subscriptionId: number;
}


export class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SubscriptionPatchRequest;

  @Metadata()
  security: PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity;
}


export class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptionResponse?: shared.SubscriptionResponse;
}
