import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingProjectsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingProjectsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingProjectsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingProjectsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserIds?: string[];
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingProjectsListSortFieldEnum;
    sortOrder?: DfareportingProjectsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingProjectsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingProjectsListRequest extends SpeakeasyBase {
    pathParams: DfareportingProjectsListPathParams;
    queryParams: DfareportingProjectsListQueryParams;
    security: DfareportingProjectsListSecurity;
}
export declare class DfareportingProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    projectsListResponse?: shared.ProjectsListResponse;
    statusCode: number;
}
