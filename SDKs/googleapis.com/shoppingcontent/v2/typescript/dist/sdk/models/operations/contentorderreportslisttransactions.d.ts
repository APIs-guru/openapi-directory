import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderreportsListtransactionsPathParams extends SpeakeasyBase {
    disbursementId: string;
    merchantId: string;
}
export declare class ContentOrderreportsListtransactionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    transactionEndDate?: string;
    transactionStartDate?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentOrderreportsListtransactionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderreportsListtransactionsRequest extends SpeakeasyBase {
    pathParams: ContentOrderreportsListtransactionsPathParams;
    queryParams: ContentOrderreportsListtransactionsQueryParams;
    security: ContentOrderreportsListtransactionsSecurity;
}
export declare class ContentOrderreportsListtransactionsResponse extends SpeakeasyBase {
    contentType: string;
    orderreportsListTransactionsResponse?: shared.OrderreportsListTransactionsResponse;
    statusCode: number;
}
