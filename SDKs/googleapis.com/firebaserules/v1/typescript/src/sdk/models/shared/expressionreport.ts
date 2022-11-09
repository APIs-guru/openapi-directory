import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExpressionReport } from "./expressionreport";
import { SourcePosition } from "./sourceposition";
import { ValueCount } from "./valuecount";


// ExpressionReport
/** 
 * Describes where in a file an expression is found and what it was evaluated to over the course of its use.
**/
export class ExpressionReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=children", elemType: shared.ExpressionReport })
  children?: ExpressionReport[];

  @Metadata({ data: "json, name=sourcePosition" })
  sourcePosition?: SourcePosition;

  @Metadata({ data: "json, name=values", elemType: shared.ValueCount })
  values?: ValueCount[];
}
