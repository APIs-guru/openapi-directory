import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LatencyPercentile
/** 
 * Latency percentile rank and value.
**/
export class LatencyPercentile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latencyMicros" })
  latencyMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=percent" })
  percent?: number;
}
