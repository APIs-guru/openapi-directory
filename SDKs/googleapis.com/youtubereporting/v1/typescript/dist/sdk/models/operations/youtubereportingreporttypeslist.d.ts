import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubereportingReportTypesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    includeSystemManaged?: boolean;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubereportingReportTypesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingReportTypesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingReportTypesListSecurity extends SpeakeasyBase {
    option1?: YoutubereportingReportTypesListSecurityOption1;
    option2?: YoutubereportingReportTypesListSecurityOption2;
}
export declare class YoutubereportingReportTypesListRequest extends SpeakeasyBase {
    queryParams: YoutubereportingReportTypesListQueryParams;
    security: YoutubereportingReportTypesListSecurity;
}
export declare class YoutubereportingReportTypesListResponse extends SpeakeasyBase {
    contentType: string;
    listReportTypesResponse?: shared.ListReportTypesResponse;
    statusCode: number;
}
