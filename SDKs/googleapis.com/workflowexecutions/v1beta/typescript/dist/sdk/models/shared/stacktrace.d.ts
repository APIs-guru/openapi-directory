import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StackTraceElement } from "./stacktraceelement";
/**
 * A collection of stack elements (frames) where an error occurred.
**/
export declare class StackTrace extends SpeakeasyBase {
    elements?: StackTraceElement[];
}
