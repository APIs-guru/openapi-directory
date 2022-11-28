import { SpeakeasyBase } from "../../../internal/utils";
import { LighthouseResultV5 } from "./lighthouseresultv5";
import { PagespeedApiLoadingExperienceV5 } from "./pagespeedapiloadingexperiencev5";
import { PagespeedVersion } from "./pagespeedversion";
/**
 * The Pagespeed API response object.
**/
export declare class PagespeedApiPagespeedResponseV5 extends SpeakeasyBase {
    analysisUtcTimestamp?: string;
    captchaResult?: string;
    id?: string;
    kind?: string;
    lighthouseResult?: LighthouseResultV5;
    loadingExperience?: PagespeedApiLoadingExperienceV5;
    originLoadingExperience?: PagespeedApiLoadingExperienceV5;
    version?: PagespeedVersion;
}
