import { SpeakeasyBase } from "../../../internal/utils";
import { ObError1 } from "./oberror1";
/**
 * An array of detail error codes, and messages, and URLs to documentation to help remediation.
**/
export declare class ObErrorResponse1 extends SpeakeasyBase {
    code: string;
    errors: ObError1[];
    id?: string;
    message: string;
}
