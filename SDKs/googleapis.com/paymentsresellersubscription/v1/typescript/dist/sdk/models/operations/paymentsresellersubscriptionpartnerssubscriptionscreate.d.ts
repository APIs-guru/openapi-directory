import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    subscriptionId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest extends SpeakeasyBase {
    pathParams: PaymentsresellersubscriptionPartnersSubscriptionsCreatePathParams;
    queryParams: PaymentsresellersubscriptionPartnersSubscriptionsCreateQueryParams;
    request?: shared.GoogleCloudPaymentsResellerSubscriptionV1SubscriptionInput;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPaymentsResellerSubscriptionV1Subscription?: shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription;
    statusCode: number;
}
