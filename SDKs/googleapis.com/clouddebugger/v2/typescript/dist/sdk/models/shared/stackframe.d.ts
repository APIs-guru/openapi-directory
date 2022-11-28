import { SpeakeasyBase } from "../../../internal/utils";
import { Variable } from "./variable";
import { SourceLocation } from "./sourcelocation";
/**
 * Represents a stack frame context.
**/
export declare class StackFrame extends SpeakeasyBase {
    arguments?: Variable[];
    function?: string;
    locals?: Variable[];
    location?: SourceLocation;
}
