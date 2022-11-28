import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFilesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingFilesListScopeEnum {
    All = "ALL",
    Mine = "MINE",
    SharedWithMe = "SHARED_WITH_ME"
}
export declare enum DfareportingFilesListSortFieldEnum {
    Id = "ID",
    LastModifiedTime = "LAST_MODIFIED_TIME"
}
export declare enum DfareportingFilesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingFilesListQueryParams extends SpeakeasyBase {
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
    scope?: DfareportingFilesListScopeEnum;
    sortField?: DfareportingFilesListSortFieldEnum;
    sortOrder?: DfareportingFilesListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingFilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFilesListRequest extends SpeakeasyBase {
    pathParams: DfareportingFilesListPathParams;
    queryParams: DfareportingFilesListQueryParams;
    security: DfareportingFilesListSecurity;
}
export declare class DfareportingFilesListResponse extends SpeakeasyBase {
    contentType: string;
    fileList?: shared.FileList;
    statusCode: number;
}
