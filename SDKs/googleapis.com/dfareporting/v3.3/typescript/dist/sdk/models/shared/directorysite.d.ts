import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { DirectorySiteSettings } from "./directorysitesettings";
export declare enum DirectorySiteInpageTagFormatsEnum {
    Standard = "STANDARD",
    IframeJavascriptInpage = "IFRAME_JAVASCRIPT_INPAGE",
    InternalRedirectInpage = "INTERNAL_REDIRECT_INPAGE",
    JavascriptInpage = "JAVASCRIPT_INPAGE"
}
export declare enum DirectorySiteInterstitialTagFormatsEnum {
    IframeJavascriptInterstitial = "IFRAME_JAVASCRIPT_INTERSTITIAL",
    InternalRedirectInterstitial = "INTERNAL_REDIRECT_INTERSTITIAL",
    JavascriptInterstitial = "JAVASCRIPT_INTERSTITIAL"
}
/**
 * DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
**/
export declare class DirectorySite extends SpeakeasyBase {
    active?: boolean;
    id?: string;
    idDimensionValue?: DimensionValue;
    inpageTagFormats?: DirectorySiteInpageTagFormatsEnum[];
    interstitialTagFormats?: DirectorySiteInterstitialTagFormatsEnum[];
    kind?: string;
    name?: string;
    settings?: DirectorySiteSettings;
    url?: string;
}
