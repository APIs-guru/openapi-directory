import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DisjunctiveMatchStatement } from "./disjunctivematchstatement";


// Rule
/** 
 * A Rule defines a name, and a boolean expression in [conjunctive normal form] (http://mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be applied to a path event to determine if that name should be applied.
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=disjunctiveMatchStatements", elemType: shared.DisjunctiveMatchStatement })
  disjunctiveMatchStatements?: DisjunctiveMatchStatement[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
