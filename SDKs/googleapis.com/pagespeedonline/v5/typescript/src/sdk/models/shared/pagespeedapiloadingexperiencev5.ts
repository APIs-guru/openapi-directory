import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserPageLoadMetricV5 } from "./userpageloadmetricv5";


// PagespeedApiLoadingExperienceV5
/** 
 * The CrUX loading experience object that contains CrUX data breakdowns.
**/
export class PagespeedApiLoadingExperienceV5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initial_url" })
  initialUrl?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.UserPageLoadMetricV5 })
  metrics?: Map<string, UserPageLoadMetricV5>;

  @Metadata({ data: "json, name=origin_fallback" })
  originFallback?: boolean;

  @Metadata({ data: "json, name=overall_category" })
  overallCategory?: string;
}
