import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The address and type of a site that is verified or will be verified.
**/
export declare class SiteVerificationWebResourceResourceSite extends SpeakeasyBase {
    identifier?: string;
    type?: string;
}
export declare class SiteVerificationWebResourceResource extends SpeakeasyBase {
    id?: string;
    owners?: string[];
    site?: SiteVerificationWebResourceResourceSite;
}
