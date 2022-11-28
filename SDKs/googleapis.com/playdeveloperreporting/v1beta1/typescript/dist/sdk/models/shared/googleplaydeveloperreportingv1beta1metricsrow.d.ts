import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1DimensionValue } from "./googleplaydeveloperreportingv1beta1dimensionvalue";
import { GooglePlayDeveloperReportingV1beta1MetricValue } from "./googleplaydeveloperreportingv1beta1metricvalue";
import { GoogleTypeDateTime } from "./googletypedatetime";
export declare enum GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum {
    AggregationPeriodUnspecified = "AGGREGATION_PERIOD_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY"
}
/**
 * Represents a row of dimensions and metrics.
**/
export declare class GooglePlayDeveloperReportingV1beta1MetricsRow extends SpeakeasyBase {
    aggregationPeriod?: GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum;
    dimensions?: GooglePlayDeveloperReportingV1beta1DimensionValue[];
    metrics?: GooglePlayDeveloperReportingV1beta1MetricValue[];
    startTime?: GoogleTypeDateTime;
}
