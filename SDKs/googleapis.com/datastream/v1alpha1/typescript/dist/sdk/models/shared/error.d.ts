import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represent a user-facing Error.
**/
export declare class Error extends SpeakeasyBase {
    details?: Map<string, string>;
    errorTime?: string;
    errorUuid?: string;
    message?: string;
    reason?: string;
}
