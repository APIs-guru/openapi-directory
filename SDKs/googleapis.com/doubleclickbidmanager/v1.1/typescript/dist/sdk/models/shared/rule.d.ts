import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DisjunctiveMatchStatement } from "./disjunctivematchstatement";
/**
 * A Rule defines a name, and a boolean expression in [conjunctive normal form](http: //mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be // applied to a path event to determine if that name should be applied.
**/
export declare class Rule extends SpeakeasyBase {
    disjunctiveMatchStatements?: DisjunctiveMatchStatement[];
    name?: string;
}
