import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Describes the error status for values that were not written.
**/
export declare class CollectdValueError extends SpeakeasyBase {
    error?: Status;
    index?: number;
}
