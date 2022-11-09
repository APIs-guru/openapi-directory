import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePlayDeveloperReportingV1alpha1DimensionValue } from "./googleplaydeveloperreportingv1alpha1dimensionvalue";
import { GooglePlayDeveloperReportingV1alpha1MetricValue } from "./googleplaydeveloperreportingv1alpha1metricvalue";
import { GoogleTypeDateTime } from "./googletypedatetime";

export enum GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum {
    AggregationPeriodUnspecified = "AGGREGATION_PERIOD_UNSPECIFIED"
,    Hourly = "HOURLY"
,    Daily = "DAILY"
}


// GooglePlayDeveloperReportingV1alpha1MetricsRow
/** 
 * Represents a row of dimensions and metrics.
**/
export class GooglePlayDeveloperReportingV1alpha1MetricsRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationPeriod" })
  aggregationPeriod?: GooglePlayDeveloperReportingV1alpha1MetricsRowAggregationPeriodEnum;

  @Metadata({ data: "json, name=dimensions", elemType: shared.GooglePlayDeveloperReportingV1alpha1DimensionValue })
  dimensions?: GooglePlayDeveloperReportingV1alpha1DimensionValue[];

  @Metadata({ data: "json, name=metrics", elemType: shared.GooglePlayDeveloperReportingV1alpha1MetricValue })
  metrics?: GooglePlayDeveloperReportingV1alpha1MetricValue[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: GoogleTypeDateTime;
}
