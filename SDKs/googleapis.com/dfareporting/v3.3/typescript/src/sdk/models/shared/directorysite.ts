import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { DirectorySiteSettings } from "./directorysitesettings";


export enum DirectorySiteInpageTagFormatsEnum {
    Standard = "STANDARD",
    IframeJavascriptInpage = "IFRAME_JAVASCRIPT_INPAGE",
    InternalRedirectInpage = "INTERNAL_REDIRECT_INPAGE",
    JavascriptInpage = "JAVASCRIPT_INPAGE"
}

export enum DirectorySiteInterstitialTagFormatsEnum {
    IframeJavascriptInterstitial = "IFRAME_JAVASCRIPT_INTERSTITIAL",
    InternalRedirectInterstitial = "INTERNAL_REDIRECT_INTERSTITIAL",
    JavascriptInterstitial = "JAVASCRIPT_INTERSTITIAL"
}


// DirectorySite
/** 
 * DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
**/
export class DirectorySite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=inpageTagFormats" })
  inpageTagFormats?: DirectorySiteInpageTagFormatsEnum[];

  @SpeakeasyMetadata({ data: "json, name=interstitialTagFormats" })
  interstitialTagFormats?: DirectorySiteInterstitialTagFormatsEnum[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: DirectorySiteSettings;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
