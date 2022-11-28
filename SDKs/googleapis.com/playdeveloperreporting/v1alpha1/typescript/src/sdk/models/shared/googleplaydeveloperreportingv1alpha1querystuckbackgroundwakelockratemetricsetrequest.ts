import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1alpha1TimelineSpec } from "./googleplaydeveloperreportingv1alpha1timelinespec";



// GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest
/** 
 * Request message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export class GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=timelineSpec" })
  timelineSpec?: GooglePlayDeveloperReportingV1alpha1TimelineSpec;
}
