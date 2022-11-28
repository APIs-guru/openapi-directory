import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisjunctiveMatchStatement } from "./disjunctivematchstatement";



// Rule
/** 
 * A Rule defines a name, and a boolean expression in [conjunctive normal form](http: //mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be // applied to a path event to determine if that name should be applied.
**/
export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disjunctiveMatchStatements", elemType: DisjunctiveMatchStatement })
  disjunctiveMatchStatements?: DisjunctiveMatchStatement[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
