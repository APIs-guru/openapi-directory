import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourcePosition } from "./sourceposition";


// VisitedExpression
/** 
 * Store the position and access outcome for an expression visited in rules.
**/
export class VisitedExpression extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourcePosition" })
  sourcePosition?: SourcePosition;

  @Metadata({ data: "json, name=value" })
  value?: any;
}
