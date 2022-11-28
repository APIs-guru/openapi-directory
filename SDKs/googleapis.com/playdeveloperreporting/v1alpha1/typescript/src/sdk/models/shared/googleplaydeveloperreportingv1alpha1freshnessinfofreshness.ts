import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDateTime } from "./googletypedatetime";


export enum GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum {
    AggregationPeriodUnspecified = "AGGREGATION_PERIOD_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY"
}


// GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness
/** 
 * Information about data freshness for a single aggregation period.
**/
export class GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshness extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationPeriod" })
  aggregationPeriod?: GooglePlayDeveloperReportingV1alpha1FreshnessInfoFreshnessAggregationPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=latestEndTime" })
  latestEndTime?: GoogleTypeDateTime;
}
