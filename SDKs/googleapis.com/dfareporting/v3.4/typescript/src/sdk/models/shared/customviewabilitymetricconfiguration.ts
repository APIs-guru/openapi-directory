import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomViewabilityMetricConfiguration
/** 
 * The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.
**/
export class CustomViewabilityMetricConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=audible" })
  audible?: boolean;

  @Metadata({ data: "json, name=timeMillis" })
  timeMillis?: number;

  @Metadata({ data: "json, name=timePercent" })
  timePercent?: number;

  @Metadata({ data: "json, name=viewabilityPercent" })
  viewabilityPercent?: number;
}
