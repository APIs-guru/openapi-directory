import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LatencyPercentile
/** 
 * Latency percentile rank and value.
**/
export class LatencyPercentile extends SpeakeasyBase {
  @Metadata({ data: "json, name=latencyMicros" })
  latencyMicros?: string;

  @Metadata({ data: "json, name=percent" })
  percent?: number;
}
