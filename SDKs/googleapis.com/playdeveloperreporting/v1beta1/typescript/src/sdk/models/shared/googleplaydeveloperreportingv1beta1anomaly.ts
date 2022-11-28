import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1DimensionValue } from "./googleplaydeveloperreportingv1beta1dimensionvalue";
import { GooglePlayDeveloperReportingV1beta1MetricValue } from "./googleplaydeveloperreportingv1beta1metricvalue";
import { GooglePlayDeveloperReportingV1beta1TimelineSpec } from "./googleplaydeveloperreportingv1beta1timelinespec";



// GooglePlayDeveloperReportingV1beta1Anomaly
/** 
 * Represents an anomaly detected in a dataset. Our anomaly detection systems flag datapoints in a time series that fall outside of and expected range derived from historical data. Although those expected ranges have an upper and a lower bound, we only flag anomalies when the data has become unexpectedly _worse_, which usually corresponds to the case where the metric crosses the upper bound. Multiple contiguous datapoints in a timeline outside of the expected range will be grouped into a single anomaly. Therefore, an anomaly represents effectively a segment of a metric's timeline. The information stored in the `timeline_spec`, `dimensions` and `metric` can be used to fetch a full timeline with extended ragne for context. **Required permissions**: to access this resource, the calling user needs the _View app information (read-only)_ permission for the app.
**/
export class GooglePlayDeveloperReportingV1beta1Anomaly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GooglePlayDeveloperReportingV1beta1DimensionValue })
  dimensions?: GooglePlayDeveloperReportingV1beta1DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: GooglePlayDeveloperReportingV1beta1MetricValue;

  @SpeakeasyMetadata({ data: "json, name=metricSet" })
  metricSet?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=timelineSpec" })
  timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;
}
