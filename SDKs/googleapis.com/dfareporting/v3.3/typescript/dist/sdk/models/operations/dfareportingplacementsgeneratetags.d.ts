import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementsGeneratetagsPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingPlacementsGeneratetagsTagFormatsEnum {
    PlacementTagStandard = "PLACEMENT_TAG_STANDARD",
    PlacementTagIframeJavascript = "PLACEMENT_TAG_IFRAME_JAVASCRIPT",
    PlacementTagIframeIlayer = "PLACEMENT_TAG_IFRAME_ILAYER",
    PlacementTagInternalRedirect = "PLACEMENT_TAG_INTERNAL_REDIRECT",
    PlacementTagJavascript = "PLACEMENT_TAG_JAVASCRIPT",
    PlacementTagInterstitialIframeJavascript = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT",
    PlacementTagInterstitialInternalRedirect = "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT",
    PlacementTagInterstitialJavascript = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT",
    PlacementTagClickCommands = "PLACEMENT_TAG_CLICK_COMMANDS",
    PlacementTagInstreamVideoPrefetch = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH",
    PlacementTagTracking = "PLACEMENT_TAG_TRACKING",
    PlacementTagTrackingIframe = "PLACEMENT_TAG_TRACKING_IFRAME",
    PlacementTagTrackingJavascript = "PLACEMENT_TAG_TRACKING_JAVASCRIPT",
    PlacementTagInstreamVideoPrefetchVast3 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3",
    PlacementTagIframeJavascriptLegacy = "PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY",
    PlacementTagJavascriptLegacy = "PLACEMENT_TAG_JAVASCRIPT_LEGACY",
    PlacementTagInterstitialIframeJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY",
    PlacementTagInterstitialJavascriptLegacy = "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY",
    PlacementTagInstreamVideoPrefetchVast4 = "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4",
    PlacementTagTrackingThirdPartyMeasurement = "PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT"
}
export declare class DfareportingPlacementsGeneratetagsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    campaignId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    placementIds?: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    tagFormats?: DfareportingPlacementsGeneratetagsTagFormatsEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingPlacementsGeneratetagsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementsGeneratetagsRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementsGeneratetagsPathParams;
    queryParams: DfareportingPlacementsGeneratetagsQueryParams;
    security: DfareportingPlacementsGeneratetagsSecurity;
}
export declare class DfareportingPlacementsGeneratetagsResponse extends SpeakeasyBase {
    contentType: string;
    placementsGenerateTagsResponse?: shared.PlacementsGenerateTagsResponse;
    statusCode: number;
}
