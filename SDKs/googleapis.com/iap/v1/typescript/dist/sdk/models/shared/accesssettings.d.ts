import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedDomainsSettings } from "./alloweddomainssettings";
import { CorsSettings } from "./corssettings";
import { GcipSettings } from "./gcipsettings";
import { OAuthSettings } from "./oauthsettings";
import { PolicyDelegationSettings } from "./policydelegationsettings";
import { ReauthSettings } from "./reauthsettings";
/**
 * Access related settings for IAP protected apps.
**/
export declare class AccessSettings extends SpeakeasyBase {
    allowedDomainsSettings?: AllowedDomainsSettings;
    corsSettings?: CorsSettings;
    gcipSettings?: GcipSettings;
    oauthSettings?: OAuthSettings;
    policyDelegationSettings?: PolicyDelegationSettings;
    reauthSettings?: ReauthSettings;
}
