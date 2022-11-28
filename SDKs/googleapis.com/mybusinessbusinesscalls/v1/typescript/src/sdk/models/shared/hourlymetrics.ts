import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HourlyMetrics
/** 
 * Metrics for an hour.
**/
export class HourlyMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour?: number;

  @SpeakeasyMetadata({ data: "json, name=missedCallsCount" })
  missedCallsCount?: number;
}
