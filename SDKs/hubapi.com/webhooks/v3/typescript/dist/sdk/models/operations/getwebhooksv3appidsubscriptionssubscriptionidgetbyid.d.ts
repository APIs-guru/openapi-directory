import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams extends SpeakeasyBase {
    appId: number;
    subscriptionId: number;
}
export declare class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest extends SpeakeasyBase {
    pathParams: GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdPathParams;
    security: GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity;
}
export declare class GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    subscriptionResponse?: shared.SubscriptionResponse;
}
