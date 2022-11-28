import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BooleanRule } from "./booleanrule";
import { GradientRule } from "./gradientrule";
import { GridRange } from "./gridrange";



// ConditionalFormatRule
/** 
 * A rule describing a conditional format.
**/
export class ConditionalFormatRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanRule" })
  booleanRule?: BooleanRule;

  @SpeakeasyMetadata({ data: "json, name=gradientRule" })
  gradientRule?: GradientRule;

  @SpeakeasyMetadata({ data: "json, name=ranges", elemType: GridRange })
  ranges?: GridRange[];
}
