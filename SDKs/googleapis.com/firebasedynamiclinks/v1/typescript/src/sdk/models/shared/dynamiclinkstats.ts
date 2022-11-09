import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DynamicLinkEventStat } from "./dynamiclinkeventstat";


// DynamicLinkStats
/** 
 * Analytics stats of a Dynamic Link for a given timeframe.
**/
export class DynamicLinkStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=linkEventStats", elemType: shared.DynamicLinkEventStat })
  linkEventStats?: DynamicLinkEventStat[];
}
