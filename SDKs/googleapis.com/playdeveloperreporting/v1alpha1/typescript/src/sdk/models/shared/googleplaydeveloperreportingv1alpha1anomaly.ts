import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePlayDeveloperReportingV1alpha1DimensionValue } from "./googleplaydeveloperreportingv1alpha1dimensionvalue";
import { GooglePlayDeveloperReportingV1alpha1MetricValue } from "./googleplaydeveloperreportingv1alpha1metricvalue";
import { GooglePlayDeveloperReportingV1alpha1TimelineSpec } from "./googleplaydeveloperreportingv1alpha1timelinespec";


// GooglePlayDeveloperReportingV1alpha1Anomaly
/** 
 * Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
**/
export class GooglePlayDeveloperReportingV1alpha1Anomaly extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions", elemType: shared.GooglePlayDeveloperReportingV1alpha1DimensionValue })
  dimensions?: GooglePlayDeveloperReportingV1alpha1DimensionValue[];

  @Metadata({ data: "json, name=metric" })
  metric?: GooglePlayDeveloperReportingV1alpha1MetricValue;

  @Metadata({ data: "json, name=metricSet" })
  metricSet?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timelineSpec" })
  timelineSpec?: GooglePlayDeveloperReportingV1alpha1TimelineSpec;
}
