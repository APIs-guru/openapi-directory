import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1DimensionValue } from "./googleplaydeveloperreportingv1alpha1dimensionvalue";
import { GooglePlayDeveloperReportingV1alpha1MetricValue } from "./googleplaydeveloperreportingv1alpha1metricvalue";
import { GoogleTypeDateTime } from "./googletypedatetime";
export declare enum GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum {
    AggregationPeriodUnspecified = "AGGREGATION_PERIOD_UNSPECIFIED",
    Hourly = "HOURLY",
    Daily = "DAILY"
}
/**
 * Represents a row of dimensions and metrics.
**/
export declare class GooglePlayDeveloperReportingV1alpha1MetricsRow extends SpeakeasyBase {
    aggregationPeriod?: GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum;
    dimensions?: GooglePlayDeveloperReportingV1alpha1DimensionValue[];
    metrics?: GooglePlayDeveloperReportingV1alpha1MetricValue[];
    startTime?: GoogleTypeDateTime;
}
