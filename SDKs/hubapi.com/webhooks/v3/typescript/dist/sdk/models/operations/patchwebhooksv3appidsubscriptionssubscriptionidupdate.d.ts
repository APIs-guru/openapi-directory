import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams extends SpeakeasyBase {
    appId: number;
    subscriptionId: number;
}
export declare class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest extends SpeakeasyBase {
    pathParams: PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdatePathParams;
    request: shared.SubscriptionPatchRequest;
    security: PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity;
}
export declare class PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    subscriptionResponse?: shared.SubscriptionResponse;
}
