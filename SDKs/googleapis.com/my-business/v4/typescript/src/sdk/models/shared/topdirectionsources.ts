import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegionCount } from "./regioncount";


// TopDirectionSources
/** 
 * Top regions where driving-direction requests originated from.
**/
export class TopDirectionSources extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayCount" })
  dayCount?: number;

  @Metadata({ data: "json, name=regionCounts", elemType: shared.RegionCount })
  regionCounts?: RegionCount[];
}
