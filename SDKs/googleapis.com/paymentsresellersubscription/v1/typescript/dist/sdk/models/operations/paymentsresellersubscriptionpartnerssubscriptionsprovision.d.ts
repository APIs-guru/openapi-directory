import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams extends SpeakeasyBase {
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
export declare class PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest extends SpeakeasyBase {
    pathParams: PaymentsresellersubscriptionPartnersSubscriptionsProvisionPathParams;
    queryParams: PaymentsresellersubscriptionPartnersSubscriptionsProvisionQueryParams;
    request?: shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPaymentsResellerSubscriptionV1Subscription?: shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription;
    statusCode: number;
}
