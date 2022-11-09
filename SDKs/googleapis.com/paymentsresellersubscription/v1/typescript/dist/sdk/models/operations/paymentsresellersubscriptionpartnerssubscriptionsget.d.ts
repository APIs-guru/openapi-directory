import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PaymentsresellersubscriptionPartnersSubscriptionsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsGetQueryParams extends SpeakeasyBase {
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
export declare class PaymentsresellersubscriptionPartnersSubscriptionsGetRequest extends SpeakeasyBase {
    pathParams: PaymentsresellersubscriptionPartnersSubscriptionsGetPathParams;
    queryParams: PaymentsresellersubscriptionPartnersSubscriptionsGetQueryParams;
}
export declare class PaymentsresellersubscriptionPartnersSubscriptionsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPaymentsResellerSubscriptionV1Subscription?: shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription;
    statusCode: number;
}
