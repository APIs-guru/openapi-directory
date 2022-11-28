import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The site for which a verification token will be generated.
**/
export declare class SiteVerificationWebResourceGettokenRequestSite extends SpeakeasyBase {
    identifier?: string;
    type?: string;
}
export declare class SiteVerificationWebResourceGettokenRequest extends SpeakeasyBase {
    site?: SiteVerificationWebResourceGettokenRequestSite;
    verificationMethod?: string;
}
