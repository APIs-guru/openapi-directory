import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BooleanRule } from "./booleanrule";
import { GradientRule } from "./gradientrule";
import { GridRange } from "./gridrange";


// ConditionalFormatRule
/** 
 * A rule describing a conditional format.
**/
export class ConditionalFormatRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanRule" })
  booleanRule?: BooleanRule;

  @Metadata({ data: "json, name=gradientRule" })
  gradientRule?: GradientRule;

  @Metadata({ data: "json, name=ranges", elemType: shared.GridRange })
  ranges?: GridRange[];
}
