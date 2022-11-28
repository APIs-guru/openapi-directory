import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubscriptionsApiDeleteSubscriptionPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class SubscriptionsApiDeleteSubscriptionQueryParams extends SpeakeasyBase {
    keep: boolean;
}
export declare class SubscriptionsApiDeleteSubscriptionHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class SubscriptionsApiDeleteSubscriptionRequest extends SpeakeasyBase {
    pathParams: SubscriptionsApiDeleteSubscriptionPathParams;
    queryParams: SubscriptionsApiDeleteSubscriptionQueryParams;
    headers: SubscriptionsApiDeleteSubscriptionHeaders;
}
export declare class SubscriptionsApiDeleteSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
