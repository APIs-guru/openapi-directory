import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { CollectdValueError } from "./collectdvalueerror";
/**
 * Describes the error status for payloads that were not written.
**/
export declare class CollectdPayloadError extends SpeakeasyBase {
    error?: Status;
    index?: number;
    valueErrors?: CollectdValueError[];
}
