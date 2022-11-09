import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StackTrace } from "./stacktrace";


// Error
/** 
 * Error describes why the execution was abnormally terminated.
**/
export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: string;

  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=stackTrace" })
  stackTrace?: StackTrace;
}
