import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSettlementreportsListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentSettlementreportsListQueryParams extends SpeakeasyBase {
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
    transferEndDate?: string;
    transferStartDate?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentSettlementreportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentSettlementreportsListRequest extends SpeakeasyBase {
    pathParams: ContentSettlementreportsListPathParams;
    queryParams: ContentSettlementreportsListQueryParams;
    security: ContentSettlementreportsListSecurity;
}
export declare class ContentSettlementreportsListResponse extends SpeakeasyBase {
    contentType: string;
    settlementreportsListResponse?: shared.SettlementreportsListResponse;
    statusCode: number;
}
