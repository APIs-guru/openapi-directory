import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingSitesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingSitesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingSitesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingSitesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    acceptsInStreamVideoPlacements?: boolean;
    acceptsInterstitialPlacements?: boolean;
    acceptsPublisherPaidPlacements?: boolean;
    accessToken?: string;
    adWordsSite?: boolean;
    alt?: shared.AltEnum;
    approved?: boolean;
    callback?: string;
    campaignIds?: string[];
    directorySiteIds?: string[];
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingSitesListSortFieldEnum;
    sortOrder?: DfareportingSitesListSortOrderEnum;
    subaccountId?: string;
    unmappedSite?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingSitesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingSitesListRequest extends SpeakeasyBase {
    pathParams: DfareportingSitesListPathParams;
    queryParams: DfareportingSitesListQueryParams;
    security: DfareportingSitesListSecurity;
}
export declare class DfareportingSitesListResponse extends SpeakeasyBase {
    contentType: string;
    sitesListResponse?: shared.SitesListResponse;
    statusCode: number;
}
