import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1CustomersIdSubscriptionsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConsumerV1CustomersIdSubscriptionsRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1CustomersIdSubscriptionsPathParams;
}
export declare class GetConsumerV1CustomersIdSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    customerSubscriptionViewModel?: shared.CustomerSubscriptionViewModel;
    statusCode: number;
}
