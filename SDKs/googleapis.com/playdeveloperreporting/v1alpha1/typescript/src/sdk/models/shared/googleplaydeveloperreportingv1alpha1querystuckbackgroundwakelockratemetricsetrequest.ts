import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePlayDeveloperReportingV1alpha1TimelineSpec } from "./googleplaydeveloperreportingv1alpha1timelinespec";


// GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest
/** 
 * Request message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export class GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=metrics" })
  metrics?: string[];

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=timelineSpec" })
  timelineSpec?: GooglePlayDeveloperReportingV1alpha1TimelineSpec;
}
