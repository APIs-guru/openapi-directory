import { SpeakeasyBase } from "../../../internal/utils";
import { OperationError } from "./operationerror";
/**
 * Database instance operation errors list wrapper.
**/
export declare class OperationErrors extends SpeakeasyBase {
    errors?: OperationError[];
    kind?: string;
}
