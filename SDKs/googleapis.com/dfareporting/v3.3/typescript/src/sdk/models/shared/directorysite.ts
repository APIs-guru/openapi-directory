import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionValue } from "./dimensionvalue";
import { DirectorySiteSettings } from "./directorysitesettings";

export enum DirectorySiteInpageTagFormatsEnum {
    Standard = "STANDARD"
,    IframeJavascriptInpage = "IFRAME_JAVASCRIPT_INPAGE"
,    InternalRedirectInpage = "INTERNAL_REDIRECT_INPAGE"
,    JavascriptInpage = "JAVASCRIPT_INPAGE"
}

export enum DirectorySiteInterstitialTagFormatsEnum {
    IframeJavascriptInterstitial = "IFRAME_JAVASCRIPT_INTERSTITIAL"
,    InternalRedirectInterstitial = "INTERNAL_REDIRECT_INTERSTITIAL"
,    JavascriptInterstitial = "JAVASCRIPT_INTERSTITIAL"
}


// DirectorySite
/** 
 * DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
**/
export class DirectorySite extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=inpageTagFormats" })
  inpageTagFormats?: DirectorySiteInpageTagFormatsEnum[];

  @Metadata({ data: "json, name=interstitialTagFormats" })
  interstitialTagFormats?: DirectorySiteInterstitialTagFormatsEnum[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: DirectorySiteSettings;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
