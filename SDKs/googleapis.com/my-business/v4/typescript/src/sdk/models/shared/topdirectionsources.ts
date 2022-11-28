import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionCount } from "./regioncount";



// TopDirectionSources
/** 
 * Top regions where driving-direction requests originated from.
**/
export class TopDirectionSources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dayCount" })
  dayCount?: number;

  @SpeakeasyMetadata({ data: "json, name=regionCounts", elemType: RegionCount })
  regionCounts?: RegionCount[];
}
