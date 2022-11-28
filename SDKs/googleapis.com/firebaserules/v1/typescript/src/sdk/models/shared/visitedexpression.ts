import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";



// VisitedExpression
/** 
 * Store the position and access outcome for an expression visited in rules.
**/
export class VisitedExpression extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourcePosition" })
  sourcePosition?: SourcePosition;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: any;
}
