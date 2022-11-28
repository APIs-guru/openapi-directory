import { SpeakeasyBase } from "../../../internal/utils";
import { RegionCount } from "./regioncount";
/**
 * Top regions where driving-direction requests originated from.
**/
export declare class TopDirectionSources extends SpeakeasyBase {
    dayCount?: number;
    regionCounts?: RegionCount[];
}
