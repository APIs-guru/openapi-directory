import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond.
**/
export declare class Bucket extends SpeakeasyBase {
    max?: number;
    min?: number;
    proportion?: number;
}
