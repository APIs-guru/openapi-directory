import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatencyPercentile } from "./latencypercentile";



// LatencyDistribution
/** 
 * Describes measured latency distribution.
**/
export class LatencyDistribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latencyPercentiles", elemType: LatencyPercentile })
  latencyPercentiles?: LatencyPercentile[];
}
