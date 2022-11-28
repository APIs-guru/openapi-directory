import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingBillingProfilesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingBillingProfilesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingBillingProfilesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DfareportingBillingProfilesListStatusEnum {
    UnderReview = "UNDER_REVIEW",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
export declare class DfareportingBillingProfilesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    currencyCode?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    name?: string;
    oauthToken?: string;
    onlySuggestion?: boolean;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sortField?: DfareportingBillingProfilesListSortFieldEnum;
    sortOrder?: DfareportingBillingProfilesListSortOrderEnum;
    status?: DfareportingBillingProfilesListStatusEnum[];
    subaccountIds?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingBillingProfilesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingBillingProfilesListRequest extends SpeakeasyBase {
    pathParams: DfareportingBillingProfilesListPathParams;
    queryParams: DfareportingBillingProfilesListQueryParams;
    security: DfareportingBillingProfilesListSecurity;
}
export declare class DfareportingBillingProfilesListResponse extends SpeakeasyBase {
    billingProfilesListResponse?: shared.BillingProfilesListResponse;
    contentType: string;
    statusCode: number;
}
