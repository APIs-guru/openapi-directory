import { SpeakeasyBase } from "../../../internal/utils";
import { SplitInt64 } from "./splitint64";
/**
 * A metric value representing temporal values of a variable.
**/
export declare class IntegerGauge extends SpeakeasyBase {
    timestamp?: string;
    value?: SplitInt64;
}
