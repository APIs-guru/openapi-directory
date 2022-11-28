import { SpeakeasyBase } from "../../../internal/utils";
import { DoubleRange } from "./doublerange";
/**
 * Specifies the way to match a double value.
**/
export declare class DoubleMatcher extends SpeakeasyBase {
    exact?: number;
    range?: DoubleRange;
}
