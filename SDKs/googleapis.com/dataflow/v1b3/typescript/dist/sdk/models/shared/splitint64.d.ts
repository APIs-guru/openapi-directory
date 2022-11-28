import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
**/
export declare class SplitInt64 extends SpeakeasyBase {
    highBits?: number;
    lowBits?: number;
}
