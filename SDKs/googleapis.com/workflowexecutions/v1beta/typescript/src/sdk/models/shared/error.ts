import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StackTrace } from "./stacktrace";



// Error
/** 
 * Error describes why the execution was abnormally terminated.
**/
export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=stackTrace" })
  stackTrace?: StackTrace;
}
