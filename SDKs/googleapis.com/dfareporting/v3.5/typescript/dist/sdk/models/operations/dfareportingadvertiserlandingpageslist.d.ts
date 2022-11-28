import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserLandingPagesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingAdvertiserLandingPagesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingAdvertiserLandingPagesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingAdvertiserLandingPagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserIds?: string[];
    alt?: shared.AltEnum;
    archived?: boolean;
    callback?: string;
    campaignIds?: string[];
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingAdvertiserLandingPagesListSortFieldEnum;
    sortOrder?: DfareportingAdvertiserLandingPagesListSortOrderEnum;
    subaccountId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingAdvertiserLandingPagesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserLandingPagesListRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserLandingPagesListPathParams;
    queryParams: DfareportingAdvertiserLandingPagesListQueryParams;
    security: DfareportingAdvertiserLandingPagesListSecurity;
}
export declare class DfareportingAdvertiserLandingPagesListResponse extends SpeakeasyBase {
    advertiserLandingPagesListResponse?: shared.AdvertiserLandingPagesListResponse;
    contentType: string;
    statusCode: number;
}
