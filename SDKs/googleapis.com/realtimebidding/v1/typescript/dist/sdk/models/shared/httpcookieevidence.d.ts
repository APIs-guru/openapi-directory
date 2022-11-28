import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evidence for HTTP cookie-related policy violations.
**/
export declare class HttpCookieEvidence extends SpeakeasyBase {
    cookieNames?: string[];
    maxCookieCount?: number;
}
