import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeGroupsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingCreativeGroupsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingCreativeGroupsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingCreativeGroupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserIds?: string[];
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    groupNumber?: number;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingCreativeGroupsListSortFieldEnum;
    sortOrder?: DfareportingCreativeGroupsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingCreativeGroupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeGroupsListRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeGroupsListPathParams;
    queryParams: DfareportingCreativeGroupsListQueryParams;
    security: DfareportingCreativeGroupsListSecurity;
}
export declare class DfareportingCreativeGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    creativeGroupsListResponse?: shared.CreativeGroupsListResponse;
    statusCode: number;
}
