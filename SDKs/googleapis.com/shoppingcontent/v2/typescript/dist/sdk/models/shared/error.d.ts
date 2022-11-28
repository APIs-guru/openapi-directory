import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An error returned by the API.
**/
export declare class Error extends SpeakeasyBase {
    domain?: string;
    message?: string;
    reason?: string;
}
