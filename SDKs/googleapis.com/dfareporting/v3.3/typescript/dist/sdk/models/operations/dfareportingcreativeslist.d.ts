import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingCreativesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingCreativesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DfareportingCreativesListTypesEnum {
    Image = "IMAGE",
    DisplayRedirect = "DISPLAY_REDIRECT",
    CustomDisplay = "CUSTOM_DISPLAY",
    InternalRedirect = "INTERNAL_REDIRECT",
    CustomDisplayInterstitial = "CUSTOM_DISPLAY_INTERSTITIAL",
    InterstitialInternalRedirect = "INTERSTITIAL_INTERNAL_REDIRECT",
    TrackingText = "TRACKING_TEXT",
    RichMediaDisplayBanner = "RICH_MEDIA_DISPLAY_BANNER",
    RichMediaInpageFloating = "RICH_MEDIA_INPAGE_FLOATING",
    RichMediaImExpand = "RICH_MEDIA_IM_EXPAND",
    RichMediaDisplayExpanding = "RICH_MEDIA_DISPLAY_EXPANDING",
    RichMediaDisplayInterstitial = "RICH_MEDIA_DISPLAY_INTERSTITIAL",
    RichMediaDisplayMultiFloatingInterstitial = "RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL",
    RichMediaMobileInApp = "RICH_MEDIA_MOBILE_IN_APP",
    FlashInpage = "FLASH_INPAGE",
    InstreamVideo = "INSTREAM_VIDEO",
    VpaidLinearVideo = "VPAID_LINEAR_VIDEO",
    VpaidNonLinearVideo = "VPAID_NON_LINEAR_VIDEO",
    InstreamVideoRedirect = "INSTREAM_VIDEO_REDIRECT",
    RichMediaPeelDown = "RICH_MEDIA_PEEL_DOWN",
    Html5Banner = "HTML5_BANNER",
    Display = "DISPLAY",
    DisplayImageGallery = "DISPLAY_IMAGE_GALLERY",
    BrandSafeDefaultInstreamVideo = "BRAND_SAFE_DEFAULT_INSTREAM_VIDEO",
    InstreamAudio = "INSTREAM_AUDIO"
}
export declare class DfareportingCreativesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    active?: boolean;
    advertiserId?: string;
    alt?: shared.AltEnum;
    archived?: boolean;
    callback?: string;
    campaignId?: string;
    companionCreativeIds?: string[];
    creativeFieldIds?: string[];
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    renderingIds?: string[];
    searchString?: string;
    sizeIds?: string[];
    sortField?: DfareportingCreativesListSortFieldEnum;
    sortOrder?: DfareportingCreativesListSortOrderEnum;
    studioCreativeId?: string;
    types?: DfareportingCreativesListTypesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingCreativesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativesListRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativesListPathParams;
    queryParams: DfareportingCreativesListQueryParams;
    security: DfareportingCreativesListSecurity;
}
export declare class DfareportingCreativesListResponse extends SpeakeasyBase {
    contentType: string;
    creativesListResponse?: shared.CreativesListResponse;
    statusCode: number;
}
