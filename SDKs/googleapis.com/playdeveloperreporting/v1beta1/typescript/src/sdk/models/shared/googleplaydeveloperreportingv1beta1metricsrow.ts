import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePlayDeveloperReportingV1beta1DimensionValue } from "./googleplaydeveloperreportingv1beta1dimensionvalue";
import { GooglePlayDeveloperReportingV1beta1MetricValue } from "./googleplaydeveloperreportingv1beta1metricvalue";
import { GoogleTypeDateTime } from "./googletypedatetime";

export enum GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum {
    AggregationPeriodUnspecified = "AGGREGATION_PERIOD_UNSPECIFIED"
,    Hourly = "HOURLY"
,    Daily = "DAILY"
}


// GooglePlayDeveloperReportingV1beta1MetricsRow
/** 
 * Represents a row of dimensions and metrics.
**/
export class GooglePlayDeveloperReportingV1beta1MetricsRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationPeriod" })
  aggregationPeriod?: GooglePlayDeveloperReportingV1beta1MetricsRowAggregationPeriodEnum;

  @Metadata({ data: "json, name=dimensions", elemType: shared.GooglePlayDeveloperReportingV1beta1DimensionValue })
  dimensions?: GooglePlayDeveloperReportingV1beta1DimensionValue[];

  @Metadata({ data: "json, name=metrics", elemType: shared.GooglePlayDeveloperReportingV1beta1MetricValue })
  metrics?: GooglePlayDeveloperReportingV1beta1MetricValue[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: GoogleTypeDateTime;
}
