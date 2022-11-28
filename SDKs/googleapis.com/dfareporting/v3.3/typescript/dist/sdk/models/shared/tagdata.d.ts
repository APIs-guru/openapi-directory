import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TagDataFormatEnum {
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
/**
 * Placement Tag Data
**/
export declare class TagData extends SpeakeasyBase {
    adId?: string;
    clickTag?: string;
    creativeId?: string;
    format?: TagDataFormatEnum;
    impressionTag?: string;
}
