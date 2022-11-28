import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TruncatableString } from "./truncatablestring";
import { Module } from "./module";



// StackFrame
/** 
 * Represents a single stack frame in a stack trace.
**/
export class StackFrame extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnNumber" })
  columnNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: TruncatableString;

  @SpeakeasyMetadata({ data: "json, name=functionName" })
  functionName?: TruncatableString;

  @SpeakeasyMetadata({ data: "json, name=lineNumber" })
  lineNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=loadModule" })
  loadModule?: Module;

  @SpeakeasyMetadata({ data: "json, name=originalFunctionName" })
  originalFunctionName?: TruncatableString;

  @SpeakeasyMetadata({ data: "json, name=sourceVersion" })
  sourceVersion?: TruncatableString;
}
