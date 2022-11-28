import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanRule } from "./booleanrule";
import { GradientRule } from "./gradientrule";
import { GridRange } from "./gridrange";
/**
 * A rule describing a conditional format.
**/
export declare class ConditionalFormatRule extends SpeakeasyBase {
    booleanRule?: BooleanRule;
    gradientRule?: GradientRule;
    ranges?: GridRange[];
}
