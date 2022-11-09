import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HourlyMetrics
/** 
 * Metrics for an hour.
**/
export class HourlyMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=hour" })
  hour?: number;

  @Metadata({ data: "json, name=missedCallsCount" })
  missedCallsCount?: number;
}
