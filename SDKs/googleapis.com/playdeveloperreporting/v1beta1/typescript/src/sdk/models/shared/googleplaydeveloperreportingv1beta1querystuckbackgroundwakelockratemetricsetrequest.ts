import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayDeveloperReportingV1beta1TimelineSpec } from "./googleplaydeveloperreportingv1beta1timelinespec";



// GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest
/** 
 * Request message for QueryStuckBackgroundWakelockRateMetricSet.
**/
export class GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest extends SpeakeasyBase {
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
  timelineSpec?: GooglePlayDeveloperReportingV1beta1TimelineSpec;
}
