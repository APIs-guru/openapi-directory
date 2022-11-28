import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Template for a single idp configuration.
**/
export declare class IdpConfig extends SpeakeasyBase {
    clientId?: string;
    enabled?: boolean;
    experimentPercent?: number;
    provider?: string;
    secret?: string;
    whitelistedAudiences?: string[];
}
