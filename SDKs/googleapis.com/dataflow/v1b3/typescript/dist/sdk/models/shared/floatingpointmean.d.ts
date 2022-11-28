import { SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";
/**
 * A representation of a floating point mean metric contribution.
**/
export declare class FloatingPointMean extends SpeakeasyBase {
    count?: SplitInt64;
    sum?: number;
}
