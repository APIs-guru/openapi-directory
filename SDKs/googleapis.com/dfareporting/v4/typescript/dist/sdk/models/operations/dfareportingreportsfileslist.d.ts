import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingReportsFilesListPathParams extends SpeakeasyBase {
    profileId: string;
    reportId: string;
}
export declare enum DfareportingReportsFilesListSortFieldEnum {
    Id = "ID",
    LastModifiedTime = "LAST_MODIFIED_TIME"
}
export declare enum DfareportingReportsFilesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingReportsFilesListQueryParams extends SpeakeasyBase {
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
    sortField?: DfareportingReportsFilesListSortFieldEnum;
    sortOrder?: DfareportingReportsFilesListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingReportsFilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingReportsFilesListRequest extends SpeakeasyBase {
    pathParams: DfareportingReportsFilesListPathParams;
    queryParams: DfareportingReportsFilesListQueryParams;
    security: DfareportingReportsFilesListSecurity;
}
export declare class DfareportingReportsFilesListResponse extends SpeakeasyBase {
    contentType: string;
    fileList?: shared.FileList;
    statusCode: number;
}
