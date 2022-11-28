import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
/**
 * A list of errors returned by a failed batch entry.
**/
export declare class Errors extends SpeakeasyBase {
    code?: number;
    errors?: Error[];
    message?: string;
}
