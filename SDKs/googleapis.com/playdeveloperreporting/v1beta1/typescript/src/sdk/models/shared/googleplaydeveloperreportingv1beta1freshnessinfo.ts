import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness } from "./googleplaydeveloperreportingv1beta1freshnessinfofreshness";


// GooglePlayDeveloperReportingV1beta1FreshnessInfo
/** 
 * Represents the latest available time that can be requested in a TimelineSpec. Different aggregation periods have different freshness. For example, `DAILY` aggregation may lag behind `HOURLY` in cases where such aggregation is computed only once at the end of the day.
**/
export class GooglePlayDeveloperReportingV1beta1FreshnessInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=freshnesses", elemType: shared.GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness })
  freshnesses?: GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness[];
}
