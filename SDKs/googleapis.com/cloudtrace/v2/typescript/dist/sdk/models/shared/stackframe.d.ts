import { SpeakeasyBase } from "../../../internal/utils";
import { TruncatableString } from "./truncatablestring";
import { Module } from "./module";
/**
 * Represents a single stack frame in a stack trace.
**/
export declare class StackFrame extends SpeakeasyBase {
    columnNumber?: string;
    fileName?: TruncatableString;
    functionName?: TruncatableString;
    lineNumber?: string;
    loadModule?: Module;
    originalFunctionName?: TruncatableString;
    sourceVersion?: TruncatableString;
}
