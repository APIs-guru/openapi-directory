import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams extends SpeakeasyBase {
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
export declare class PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest extends SpeakeasyBase {
    pathParams: PaymentsresellersubscriptionPartnersSubscriptionsCancelPathParams;
    queryParams: PaymentsresellersubscriptionPartnersSubscriptionsCancelQueryParams;
    request?: shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse?: shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse;
    statusCode: number;
}
