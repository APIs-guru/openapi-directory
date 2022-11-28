import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingPlacementsListCompatibilitiesEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
export declare enum DfareportingPlacementsListPaymentSourceEnum {
    PlacementAgencyPaid = "PLACEMENT_AGENCY_PAID",
    PlacementPublisherPaid = "PLACEMENT_PUBLISHER_PAID"
}
export declare enum DfareportingPlacementsListPricingTypesEnum {
    PricingTypeCpm = "PRICING_TYPE_CPM",
    PricingTypeCpc = "PRICING_TYPE_CPC",
    PricingTypeCpa = "PRICING_TYPE_CPA",
    PricingTypeFlatRateImpressions = "PRICING_TYPE_FLAT_RATE_IMPRESSIONS",
    PricingTypeFlatRateClicks = "PRICING_TYPE_FLAT_RATE_CLICKS",
    PricingTypeCpmActiveview = "PRICING_TYPE_CPM_ACTIVEVIEW"
}
export declare enum DfareportingPlacementsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingPlacementsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingPlacementsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserIds?: string[];
    alt?: shared.AltEnum;
    archived?: boolean;
    callback?: string;
    campaignIds?: string[];
    compatibilities?: DfareportingPlacementsListCompatibilitiesEnum[];
    contentCategoryIds?: string[];
    directorySiteIds?: string[];
    fields?: string;
    groupIds?: string[];
    ids?: string[];
    key?: string;
    maxEndDate?: string;
    maxResults?: number;
    maxStartDate?: string;
    minEndDate?: string;
    minStartDate?: string;
    oauthToken?: string;
    pageToken?: string;
    paymentSource?: DfareportingPlacementsListPaymentSourceEnum;
    placementStrategyIds?: string[];
    prettyPrint?: boolean;
    pricingTypes?: DfareportingPlacementsListPricingTypesEnum[];
    quotaUser?: string;
    searchString?: string;
    siteIds?: string[];
    sizeIds?: string[];
    sortField?: DfareportingPlacementsListSortFieldEnum;
    sortOrder?: DfareportingPlacementsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingPlacementsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementsListRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementsListPathParams;
    queryParams: DfareportingPlacementsListQueryParams;
    security: DfareportingPlacementsListSecurity;
}
export declare class DfareportingPlacementsListResponse extends SpeakeasyBase {
    contentType: string;
    placementsListResponse?: shared.PlacementsListResponse;
    statusCode: number;
}
