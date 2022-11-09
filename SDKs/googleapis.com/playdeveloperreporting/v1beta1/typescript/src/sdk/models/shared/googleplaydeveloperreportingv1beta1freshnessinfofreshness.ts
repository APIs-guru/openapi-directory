import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeDateTime } from "./googletypedatetime";

export enum GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum {
    AggregationPeriodUnspecified = "AGGREGATION_PERIOD_UNSPECIFIED"
,    Hourly = "HOURLY"
,    Daily = "DAILY"
}


// GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness
/** 
 * Information about data freshness for a single aggregation period.
**/
export class GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshness extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationPeriod" })
  aggregationPeriod?: GooglePlayDeveloperReportingV1beta1FreshnessInfoFreshnessAggregationPeriodEnum;

  @Metadata({ data: "json, name=latestEndTime" })
  latestEndTime?: GoogleTypeDateTime;
}
