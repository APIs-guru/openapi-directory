import { SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";
/**
 * Store the position and access outcome for an expression visited in rules.
**/
export declare class VisitedExpression extends SpeakeasyBase {
    sourcePosition?: SourcePosition;
    value?: any;
}
