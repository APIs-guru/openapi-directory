import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertisersListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingAdvertisersListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingAdvertisersListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DfareportingAdvertisersListStatusEnum {
    Approved = "APPROVED",
    OnHold = "ON_HOLD"
}
export declare class DfareportingAdvertisersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserGroupIds?: string[];
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    floodlightConfigurationIds?: string[];
    ids?: string[];
    includeAdvertisersWithoutGroupsOnly?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    onlyParent?: boolean;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingAdvertisersListSortFieldEnum;
    sortOrder?: DfareportingAdvertisersListSortOrderEnum;
    status?: DfareportingAdvertisersListStatusEnum;
    subaccountId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingAdvertisersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertisersListRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertisersListPathParams;
    queryParams: DfareportingAdvertisersListQueryParams;
    security: DfareportingAdvertisersListSecurity;
}
export declare class DfareportingAdvertisersListResponse extends SpeakeasyBase {
    advertisersListResponse?: shared.AdvertisersListResponse;
    contentType: string;
    statusCode: number;
}
