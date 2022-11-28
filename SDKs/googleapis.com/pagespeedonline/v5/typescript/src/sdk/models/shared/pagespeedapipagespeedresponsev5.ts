import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LighthouseResultV5 } from "./lighthouseresultv5";
import { PagespeedApiLoadingExperienceV5 } from "./pagespeedapiloadingexperiencev5";
import { PagespeedVersion } from "./pagespeedversion";



// PagespeedApiPagespeedResponseV5
/** 
 * The Pagespeed API response object.
**/
export class PagespeedApiPagespeedResponseV5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisUTCTimestamp" })
  analysisUtcTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=captchaResult" })
  captchaResult?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lighthouseResult" })
  lighthouseResult?: LighthouseResultV5;

  @SpeakeasyMetadata({ data: "json, name=loadingExperience" })
  loadingExperience?: PagespeedApiLoadingExperienceV5;

  @SpeakeasyMetadata({ data: "json, name=originLoadingExperience" })
  originLoadingExperience?: PagespeedApiLoadingExperienceV5;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: PagespeedVersion;
}
