import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPageLoadMetricV5 } from "./userpageloadmetricv5";



// PagespeedApiLoadingExperienceV5
/** 
 * The CrUX loading experience object that contains CrUX data breakdowns.
**/
export class PagespeedApiLoadingExperienceV5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=initial_url" })
  initialUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: UserPageLoadMetricV5 })
  metrics?: Map<string, UserPageLoadMetricV5>;

  @SpeakeasyMetadata({ data: "json, name=origin_fallback" })
  originFallback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=overall_category" })
  overallCategory?: string;
}
