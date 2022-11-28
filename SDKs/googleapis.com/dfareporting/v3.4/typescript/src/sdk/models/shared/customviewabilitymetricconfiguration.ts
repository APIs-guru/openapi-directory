import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomViewabilityMetricConfiguration
/** 
 * The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.
**/
export class CustomViewabilityMetricConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audible" })
  audible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeMillis" })
  timeMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=timePercent" })
  timePercent?: number;

  @SpeakeasyMetadata({ data: "json, name=viewabilityPercent" })
  viewabilityPercent?: number;
}
