import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LatencyPercentile } from "./latencypercentile";


// LatencyDistribution
/** 
 * Describes measured latency distribution.
**/
export class LatencyDistribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=latencyPercentiles", elemType: shared.LatencyPercentile })
  latencyPercentiles?: LatencyPercentile[];
}
