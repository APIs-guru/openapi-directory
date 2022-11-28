import { SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";
import { Histogram } from "./histogram";
/**
 * A metric value representing a distribution.
**/
export declare class DistributionUpdate extends SpeakeasyBase {
    count?: SplitInt64;
    histogram?: Histogram;
    max?: SplitInt64;
    min?: SplitInt64;
    sum?: SplitInt64;
    sumOfSquares?: number;
}
