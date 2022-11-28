import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkEventStat } from "./dynamiclinkeventstat";



// DynamicLinkStats
/** 
 * Analytics stats of a Dynamic Link for a given timeframe.
**/
export class DynamicLinkStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkEventStats", elemType: DynamicLinkEventStat })
  linkEventStats?: DynamicLinkEventStat[];
}
