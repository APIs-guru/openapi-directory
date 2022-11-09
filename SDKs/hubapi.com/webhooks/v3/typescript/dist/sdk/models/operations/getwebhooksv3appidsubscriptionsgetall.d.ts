import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWebhooksV3AppIdSubscriptionsGetAllPathParams extends SpeakeasyBase {
    appId: number;
}
export declare class GetWebhooksV3AppIdSubscriptionsGetAllSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetWebhooksV3AppIdSubscriptionsGetAllRequest extends SpeakeasyBase {
    pathParams: GetWebhooksV3AppIdSubscriptionsGetAllPathParams;
    security: GetWebhooksV3AppIdSubscriptionsGetAllSecurity;
}
export declare class GetWebhooksV3AppIdSubscriptionsGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    subscriptionListResponse?: shared.SubscriptionListResponse;
}
