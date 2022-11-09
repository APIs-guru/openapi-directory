import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PaymentsresellersubscriptionPartnersPromotionsFindEligiblePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PaymentsresellersubscriptionPartnersPromotionsFindEligibleQueryParams extends SpeakeasyBase {
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
export declare class PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest extends SpeakeasyBase {
    pathParams: PaymentsresellersubscriptionPartnersPromotionsFindEligiblePathParams;
    queryParams: PaymentsresellersubscriptionPartnersPromotionsFindEligibleQueryParams;
    request?: shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest;
}
export declare class PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse?: shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse;
    statusCode: number;
}
