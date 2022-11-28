import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsresellersubscriptionPartnersProductsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PaymentsresellersubscriptionPartnersProductsListQueryParams extends SpeakeasyBase {
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
export declare class PaymentsresellersubscriptionPartnersProductsListRequest extends SpeakeasyBase {
    pathParams: PaymentsresellersubscriptionPartnersProductsListPathParams;
    queryParams: PaymentsresellersubscriptionPartnersProductsListQueryParams;
}
export declare class PaymentsresellersubscriptionPartnersProductsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPaymentsResellerSubscriptionV1ListProductsResponse?: shared.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse;
    statusCode: number;
}
