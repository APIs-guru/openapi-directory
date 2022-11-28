import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsresellersubscriptionPartnersSubscriptionsExtendPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsExtendQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest extends SpeakeasyBase {
    pathParams: PaymentsresellersubscriptionPartnersSubscriptionsExtendPathParams;
    queryParams: PaymentsresellersubscriptionPartnersSubscriptionsExtendQueryParams;
    request?: shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse?: shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse;
    statusCode: number;
}
