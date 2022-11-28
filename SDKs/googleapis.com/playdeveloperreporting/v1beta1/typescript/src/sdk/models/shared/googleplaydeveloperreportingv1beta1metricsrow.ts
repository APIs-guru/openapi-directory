import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1DimensionValue } from "./googleplaydeveloperreportingv1beta1dimensionvalue";
import { GooglePlayDeveloperReportingV1beta1MetricValue } from "./googleplaydeveloperreportingv1beta1metricvalue";
import { GoogleTypeDateTime } from "./googletypedatetime";


export enum GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum {
    AggregationPeriodUnspecified = "AGGREGATION_PERIOD_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY"
}


// GooglePlayDeveloperReportingV1beta1MetricsRow
/** 
 * Represents a row of dimensions and metrics.
**/
export class GooglePlayDeveloperReportingV1beta1MetricsRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationPeriod" })
  aggregationPeriod?: GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GooglePlayDeveloperReportingV1beta1DimensionValue })
  dimensions?: GooglePlayDeveloperReportingV1beta1DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GooglePlayDeveloperReportingV1beta1MetricValue })
  metrics?: GooglePlayDeveloperReportingV1beta1MetricValue[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: GoogleTypeDateTime;
}
