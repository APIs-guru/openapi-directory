import { SpeakeasyBase } from "../../../internal/utils";
/**
 * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
**/
export declare class StatusCause extends SpeakeasyBase {
    field?: string;
    message?: string;
    reason?: string;
}
