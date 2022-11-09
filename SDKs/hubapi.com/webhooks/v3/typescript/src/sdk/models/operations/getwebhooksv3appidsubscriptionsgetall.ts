import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWebhooksV3AppIdSubscriptionsGetAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetWebhooksV3AppIdSubscriptionsGetAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetWebhooksV3AppIdSubscriptionsGetAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWebhooksV3AppIdSubscriptionsGetAllPathParams;

  @Metadata()
  security: GetWebhooksV3AppIdSubscriptionsGetAllSecurity;
}


export class GetWebhooksV3AppIdSubscriptionsGetAllResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscriptionListResponse?: shared.SubscriptionListResponse;
}
