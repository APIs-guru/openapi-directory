import { SpeakeasyBase } from "../../../internal/utils";
import { BasicSli } from "./basicsli";
import { RequestBasedSli } from "./requestbasedsli";
/**
 * A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.
**/
export declare class PerformanceThreshold extends SpeakeasyBase {
    basicSliPerformance?: BasicSli;
    performance?: RequestBasedSli;
    threshold?: number;
}
