import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StackTrace } from "./stacktrace";
/**
 * Error describes why the execution was abnormally terminated.
**/
export declare class Error extends SpeakeasyBase {
    context?: string;
    payload?: string;
    stackTrace?: StackTrace;
}
