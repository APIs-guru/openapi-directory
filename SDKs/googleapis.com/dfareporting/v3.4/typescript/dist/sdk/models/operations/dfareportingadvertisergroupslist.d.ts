import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserGroupsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingAdvertiserGroupsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingAdvertiserGroupsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingAdvertiserGroupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
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
    sortField?: DfareportingAdvertiserGroupsListSortFieldEnum;
    sortOrder?: DfareportingAdvertiserGroupsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingAdvertiserGroupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserGroupsListRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserGroupsListPathParams;
    queryParams: DfareportingAdvertiserGroupsListQueryParams;
    security: DfareportingAdvertiserGroupsListSecurity;
}
export declare class DfareportingAdvertiserGroupsListResponse extends SpeakeasyBase {
    advertiserGroupsListResponse?: shared.AdvertiserGroupsListResponse;
    contentType: string;
    statusCode: number;
}
