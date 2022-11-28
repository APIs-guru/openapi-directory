import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UsageRateTimeline } from "./usageratetimeline";



// Usage
/** 
 * An amount of usage over a time frame.
**/
export class Usage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=usageRateTimeline" })
  usageRateTimeline?: UsageRateTimeline;
}
