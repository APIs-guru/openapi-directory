import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConsumerV1CustomersSubscriptionsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConsumerV1CustomersSubscriptionsIdRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1CustomersSubscriptionsIdPathParams;
}
export declare class GetConsumerV1CustomersSubscriptionsIdResponse extends SpeakeasyBase {
    contentType: string;
    customerSubscriptionViewModel?: shared.CustomerSubscriptionViewModel;
    statusCode: number;
}
