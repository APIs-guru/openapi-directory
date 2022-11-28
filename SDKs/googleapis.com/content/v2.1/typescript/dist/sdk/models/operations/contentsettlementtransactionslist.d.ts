import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSettlementtransactionsListPathParams extends SpeakeasyBase {
    merchantId: string;
    settlementId: string;
}
export declare class ContentSettlementtransactionsListQueryParams extends SpeakeasyBase {
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
    transactionIds?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentSettlementtransactionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentSettlementtransactionsListRequest extends SpeakeasyBase {
    pathParams: ContentSettlementtransactionsListPathParams;
    queryParams: ContentSettlementtransactionsListQueryParams;
    security: ContentSettlementtransactionsListSecurity;
}
export declare class ContentSettlementtransactionsListResponse extends SpeakeasyBase {
    contentType: string;
    settlementtransactionsListResponse?: shared.SettlementtransactionsListResponse;
    statusCode: number;
}
