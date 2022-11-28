import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentSettlementreportsGetPathParams extends SpeakeasyBase {
    merchantId: string;
    settlementId: string;
}
export declare class ContentSettlementreportsGetQueryParams extends SpeakeasyBase {
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
export declare class ContentSettlementreportsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentSettlementreportsGetRequest extends SpeakeasyBase {
    pathParams: ContentSettlementreportsGetPathParams;
    queryParams: ContentSettlementreportsGetQueryParams;
    security: ContentSettlementreportsGetSecurity;
}
export declare class ContentSettlementreportsGetResponse extends SpeakeasyBase {
    contentType: string;
    settlementReport?: shared.SettlementReport;
    statusCode: number;
}
