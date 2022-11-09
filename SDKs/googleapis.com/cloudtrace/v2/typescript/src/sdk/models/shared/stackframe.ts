import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TruncatableString } from "./truncatablestring";
import { TruncatableString } from "./truncatablestring";
import { Module } from "./module";
import { TruncatableString } from "./truncatablestring";
import { TruncatableString } from "./truncatablestring";


// StackFrame
/** 
 * Represents a single stack frame in a stack trace.
**/
export class StackFrame extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnNumber" })
  columnNumber?: string;

  @Metadata({ data: "json, name=fileName" })
  fileName?: TruncatableString;

  @Metadata({ data: "json, name=functionName" })
  functionName?: TruncatableString;

  @Metadata({ data: "json, name=lineNumber" })
  lineNumber?: string;

  @Metadata({ data: "json, name=loadModule" })
  loadModule?: Module;

  @Metadata({ data: "json, name=originalFunctionName" })
  originalFunctionName?: TruncatableString;

  @Metadata({ data: "json, name=sourceVersion" })
  sourceVersion?: TruncatableString;
}
