import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsresellersubscriptionPartnersPromotionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PaymentsresellersubscriptionPartnersPromotionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PaymentsresellersubscriptionPartnersPromotionsListRequest extends SpeakeasyBase {
    pathParams: PaymentsresellersubscriptionPartnersPromotionsListPathParams;
    queryParams: PaymentsresellersubscriptionPartnersPromotionsListQueryParams;
}
export declare class PaymentsresellersubscriptionPartnersPromotionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse?: shared.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse;
    statusCode: number;
}
