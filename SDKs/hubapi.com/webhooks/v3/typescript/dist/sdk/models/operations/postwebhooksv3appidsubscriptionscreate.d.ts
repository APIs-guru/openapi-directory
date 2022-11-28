import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWebhooksV3AppIdSubscriptionsCreatePathParams extends SpeakeasyBase {
    appId: number;
}
export declare class PostWebhooksV3AppIdSubscriptionsCreateSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class PostWebhooksV3AppIdSubscriptionsCreateRequest extends SpeakeasyBase {
    pathParams: PostWebhooksV3AppIdSubscriptionsCreatePathParams;
    request: shared.SubscriptionCreateRequest;
    security: PostWebhooksV3AppIdSubscriptionsCreateSecurity;
}
export declare class PostWebhooksV3AppIdSubscriptionsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    subscriptionResponse?: shared.SubscriptionResponse;
}
