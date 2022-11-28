import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWebhooksV3AppIdSubscriptionsGetAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetWebhooksV3AppIdSubscriptionsGetAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetWebhooksV3AppIdSubscriptionsGetAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWebhooksV3AppIdSubscriptionsGetAllPathParams;

  @SpeakeasyMetadata()
  security: GetWebhooksV3AppIdSubscriptionsGetAllSecurity;
}


export class GetWebhooksV3AppIdSubscriptionsGetAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscriptionListResponse?: shared.SubscriptionListResponse;
}
