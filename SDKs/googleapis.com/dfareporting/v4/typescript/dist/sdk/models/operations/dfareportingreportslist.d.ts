import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingReportsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingReportsListScopeEnum {
    All = "ALL",
    Mine = "MINE"
}
export declare enum DfareportingReportsListSortFieldEnum {
    Id = "ID",
    LastModifiedTime = "LAST_MODIFIED_TIME",
    Name = "NAME"
}
export declare enum DfareportingReportsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingReportsListQueryParams extends SpeakeasyBase {
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
    scope?: DfareportingReportsListScopeEnum;
    sortField?: DfareportingReportsListSortFieldEnum;
    sortOrder?: DfareportingReportsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingReportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingReportsListRequest extends SpeakeasyBase {
    pathParams: DfareportingReportsListPathParams;
    queryParams: DfareportingReportsListQueryParams;
    security: DfareportingReportsListSecurity;
}
export declare class DfareportingReportsListResponse extends SpeakeasyBase {
    contentType: string;
    reportList?: shared.ReportList;
    statusCode: number;
}
