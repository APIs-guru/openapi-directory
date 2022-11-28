import { SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";
/**
 * A representation of an integer mean metric contribution.
**/
export declare class IntegerMean extends SpeakeasyBase {
    count?: SplitInt64;
    sum?: SplitInt64;
}
