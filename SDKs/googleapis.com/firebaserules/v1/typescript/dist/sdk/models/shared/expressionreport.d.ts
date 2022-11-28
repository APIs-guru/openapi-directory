import { SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";
import { ValueCount } from "./valuecount";
/**
 * Describes where in a file an expression is found and what it was evaluated to over the course of its use.
**/
export declare class ExpressionReport extends SpeakeasyBase {
    children?: ExpressionReport[];
    sourcePosition?: SourcePosition;
    values?: ValueCount[];
}
