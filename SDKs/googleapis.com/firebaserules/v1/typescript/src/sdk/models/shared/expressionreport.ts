import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";
import { ValueCount } from "./valuecount";



// ExpressionReport
/** 
 * Describes where in a file an expression is found and what it was evaluated to over the course of its use.
**/
export class ExpressionReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=children", elemType: ExpressionReport })
  children?: ExpressionReport[];

  @SpeakeasyMetadata({ data: "json, name=sourcePosition" })
  sourcePosition?: SourcePosition;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: ValueCount })
  values?: ValueCount[];
}
