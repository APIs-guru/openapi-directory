import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingAdsListCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
export declare enum DfareportingAdsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingAdsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DfareportingAdsListTypeEnum {
    AdServingStandardAd = "AD_SERVING_STANDARD_AD",
    AdServingDefaultAd = "AD_SERVING_DEFAULT_AD",
    AdServingClickTracker = "AD_SERVING_CLICK_TRACKER",
    AdServingTracking = "AD_SERVING_TRACKING",
    AdServingBrandSafeAd = "AD_SERVING_BRAND_SAFE_AD"
}
export declare class DfareportingAdsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    active?: boolean;
    advertiserId?: string;
    alt?: shared.AltEnum;
    archived?: boolean;
    audienceSegmentIds?: string[];
    callback?: string;
    campaignIds?: string[];
    compatibility?: DfareportingAdsListCompatibilityEnum;
    creativeIds?: string[];
    creativeOptimizationConfigurationIds?: string[];
    dynamicClickTracker?: boolean;
    fields?: string;
    ids?: string[];
    key?: string;
    landingPageIds?: string[];
    maxResults?: number;
    oauthToken?: string;
    overriddenEventTagId?: string;
    pageToken?: string;
    placementIds?: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    remarketingListIds?: string[];
    searchString?: string;
    sizeIds?: string[];
    sortField?: DfareportingAdsListSortFieldEnum;
    sortOrder?: DfareportingAdsListSortOrderEnum;
    sslCompliant?: boolean;
    sslRequired?: boolean;
    type?: DfareportingAdsListTypeEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingAdsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdsListRequest extends SpeakeasyBase {
    pathParams: DfareportingAdsListPathParams;
    queryParams: DfareportingAdsListQueryParams;
    security: DfareportingAdsListSecurity;
}
export declare class DfareportingAdsListResponse extends SpeakeasyBase {
    adsListResponse?: shared.AdsListResponse;
    contentType: string;
    statusCode: number;
}
