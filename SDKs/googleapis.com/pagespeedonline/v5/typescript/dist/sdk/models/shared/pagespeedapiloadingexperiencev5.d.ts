import { SpeakeasyBase } from "../../../internal/utils";
import { UserPageLoadMetricV5 } from "./userpageloadmetricv5";
/**
 * The CrUX loading experience object that contains CrUX data breakdowns.
**/
export declare class PagespeedApiLoadingExperienceV5 extends SpeakeasyBase {
    id?: string;
    initialUrl?: string;
    metrics?: Map<string, UserPageLoadMetricV5>;
    originFallback?: boolean;
    overallCategory?: string;
}
