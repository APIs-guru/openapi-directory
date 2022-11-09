import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutConsumerV1CustomersSubscriptionsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutConsumerV1CustomersSubscriptionsIdRequests extends SpeakeasyBase {
    customerSubscriptionUpdateModel?: shared.CustomerSubscriptionUpdateModel;
    customerSubscriptionUpdateModel1?: shared.CustomerSubscriptionUpdateModel;
    customerSubscriptionUpdateModel2?: shared.CustomerSubscriptionUpdateModel;
    customerSubscriptionUpdateModel3?: shared.CustomerSubscriptionUpdateModel;
}
export declare class PutConsumerV1CustomersSubscriptionsIdRequest extends SpeakeasyBase {
    pathParams: PutConsumerV1CustomersSubscriptionsIdPathParams;
    request?: PutConsumerV1CustomersSubscriptionsIdRequests;
}
export declare class PutConsumerV1CustomersSubscriptionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
