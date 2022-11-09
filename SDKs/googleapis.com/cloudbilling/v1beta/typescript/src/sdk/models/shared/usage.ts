import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UsageRateTimeline } from "./usageratetimeline";


// Usage
/** 
 * An amount of usage over a time frame.
**/
export class Usage extends SpeakeasyBase {
  @Metadata({ data: "json, name=usageRateTimeline" })
  usageRateTimeline?: UsageRateTimeline;
}
