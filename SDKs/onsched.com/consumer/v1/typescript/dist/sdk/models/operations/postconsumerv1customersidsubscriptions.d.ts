import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostConsumerV1CustomersIdSubscriptionsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostConsumerV1CustomersIdSubscriptionsRequests extends SpeakeasyBase {
    customerSubscriptionInputModel?: shared.CustomerSubscriptionInputModel;
    customerSubscriptionInputModel1?: shared.CustomerSubscriptionInputModel;
    customerSubscriptionInputModel2?: shared.CustomerSubscriptionInputModel;
    customerSubscriptionInputModel3?: shared.CustomerSubscriptionInputModel;
}
export declare class PostConsumerV1CustomersIdSubscriptionsRequest extends SpeakeasyBase {
    pathParams: PostConsumerV1CustomersIdSubscriptionsPathParams;
    request?: PostConsumerV1CustomersIdSubscriptionsRequests;
}
export declare class PostConsumerV1CustomersIdSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    customerSubscriptionViewModel?: shared.CustomerSubscriptionViewModel;
    statusCode: number;
}
