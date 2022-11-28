import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementGroupsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingPlacementGroupsListActiveStatusEnum {
    PlacementStatusUnknown = "PLACEMENT_STATUS_UNKNOWN",
    PlacementStatusActive = "PLACEMENT_STATUS_ACTIVE",
    PlacementStatusInactive = "PLACEMENT_STATUS_INACTIVE",
    PlacementStatusArchived = "PLACEMENT_STATUS_ARCHIVED",
    PlacementStatusPermanentlyArchived = "PLACEMENT_STATUS_PERMANENTLY_ARCHIVED"
}
export declare enum DfareportingPlacementGroupsListPlacementGroupTypeEnum {
    PlacementPackage = "PLACEMENT_PACKAGE",
    PlacementRoadblock = "PLACEMENT_ROADBLOCK"
}
export declare enum DfareportingPlacementGroupsListPricingTypesEnum {
    PricingTypeCpm = "PRICING_TYPE_CPM",
    PricingTypeCpc = "PRICING_TYPE_CPC",
    PricingTypeCpa = "PRICING_TYPE_CPA",
    PricingTypeFlatRateImpressions = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PricingTypeFlatRateClicks = "PRICING_TYPE_FLAT_RATE_CLICKS",
    PricingTypeCpmActiveview = "PRICING_TYPE_CPM_ACTIVEVIEW"
}
export declare enum DfareportingPlacementGroupsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingPlacementGroupsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingPlacementGroupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    activeStatus?: DfareportingPlacementGroupsListActiveStatusEnum[];
    advertiserIds?: string[];
    alt?: shared.AltEnum;
    callback?: string;
    campaignIds?: string[];
    contentCategoryIds?: string[];
    directorySiteIds?: string[];
    fields?: string;
    ids?: string[];
    key?: string;
    maxEndDate?: string;
    maxResults?: number;
    maxStartDate?: string;
    minEndDate?: string;
    minStartDate?: string;
    oauthToken?: string;
    pageToken?: string;
    placementGroupType?: DfareportingPlacementGroupsListPlacementGroupTypeEnum;
    placementStrategyIds?: string[];
    prettyPrint?: boolean;
    pricingTypes?: DfareportingPlacementGroupsListPricingTypesEnum[];
    quotaUser?: string;
    searchString?: string;
    siteIds?: string[];
    sortField?: DfareportingPlacementGroupsListSortFieldEnum;
    sortOrder?: DfareportingPlacementGroupsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingPlacementGroupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementGroupsListRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementGroupsListPathParams;
    queryParams: DfareportingPlacementGroupsListQueryParams;
    security: DfareportingPlacementGroupsListSecurity;
}
export declare class DfareportingPlacementGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    placementGroupsListResponse?: shared.PlacementGroupsListResponse;
    statusCode: number;
}
