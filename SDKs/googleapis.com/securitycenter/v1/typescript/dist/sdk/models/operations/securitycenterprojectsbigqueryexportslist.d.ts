import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsBigQueryExportsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsBigQueryExportsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterProjectsBigQueryExportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsBigQueryExportsListRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsBigQueryExportsListPathParams;
    queryParams: SecuritycenterProjectsBigQueryExportsListQueryParams;
    security: SecuritycenterProjectsBigQueryExportsListSecurity;
}
export declare class SecuritycenterProjectsBigQueryExportsListResponse extends SpeakeasyBase {
    contentType: string;
    listBigQueryExportsResponse?: shared.ListBigQueryExportsResponse;
    statusCode: number;
}
