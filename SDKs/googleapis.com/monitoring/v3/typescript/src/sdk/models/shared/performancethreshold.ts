import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BasicSli } from "./basicsli";
import { RequestBasedSli } from "./requestbasedsli";


// PerformanceThreshold
/** 
 * A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.
**/
export class PerformanceThreshold extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicSliPerformance" })
  basicSliPerformance?: BasicSli;

  @Metadata({ data: "json, name=performance" })
  performance?: RequestBasedSli;

  @Metadata({ data: "json, name=threshold" })
  threshold?: number;
}
