import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams extends SpeakeasyBase {
    appId: number;
    subscriptionId: number;
}
export declare class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest extends SpeakeasyBase {
    pathParams: DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchivePathParams;
    security: DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity;
}
export declare class DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
