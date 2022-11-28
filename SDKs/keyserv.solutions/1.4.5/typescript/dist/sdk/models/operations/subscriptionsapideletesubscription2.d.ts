import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubscriptionsApiDeleteSubscription2PathParams extends SpeakeasyBase {
    serial: string;
}
export declare class SubscriptionsApiDeleteSubscription2QueryParams extends SpeakeasyBase {
    keep: boolean;
}
export declare class SubscriptionsApiDeleteSubscription2Headers extends SpeakeasyBase {
    xApiKey: string;
}
export declare class SubscriptionsApiDeleteSubscription2Request extends SpeakeasyBase {
    pathParams: SubscriptionsApiDeleteSubscription2PathParams;
    queryParams: SubscriptionsApiDeleteSubscription2QueryParams;
    headers: SubscriptionsApiDeleteSubscription2Headers;
}
export declare class SubscriptionsApiDeleteSubscription2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
