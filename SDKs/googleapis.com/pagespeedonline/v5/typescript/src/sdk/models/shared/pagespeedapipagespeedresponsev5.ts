import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LighthouseResultV5 } from "./lighthouseresultv5";
import { PagespeedApiLoadingExperienceV5 } from "./pagespeedapiloadingexperiencev5";
import { PagespeedApiLoadingExperienceV5 } from "./pagespeedapiloadingexperiencev5";
import { PagespeedVersion } from "./pagespeedversion";


// PagespeedApiPagespeedResponseV5
/** 
 * The Pagespeed API response object.
**/
export class PagespeedApiPagespeedResponseV5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisUTCTimestamp" })
  analysisUtcTimestamp?: string;

  @Metadata({ data: "json, name=captchaResult" })
  captchaResult?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lighthouseResult" })
  lighthouseResult?: LighthouseResultV5;

  @Metadata({ data: "json, name=loadingExperience" })
  loadingExperience?: PagespeedApiLoadingExperienceV5;

  @Metadata({ data: "json, name=originLoadingExperience" })
  originLoadingExperience?: PagespeedApiLoadingExperienceV5;

  @Metadata({ data: "json, name=version" })
  version?: PagespeedVersion;
}
