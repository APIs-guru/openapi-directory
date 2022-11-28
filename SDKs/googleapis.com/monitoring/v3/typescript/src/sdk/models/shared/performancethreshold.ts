import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicSli } from "./basicsli";
import { RequestBasedSli } from "./requestbasedsli";



// PerformanceThreshold
/** 
 * A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.
**/
export class PerformanceThreshold extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicSliPerformance" })
  basicSliPerformance?: BasicSli;

  @SpeakeasyMetadata({ data: "json, name=performance" })
  performance?: RequestBasedSli;

  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold?: number;
}
