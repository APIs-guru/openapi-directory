import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowedDomainsSettings } from "./alloweddomainssettings";
import { CorsSettings } from "./corssettings";
import { GcipSettings } from "./gcipsettings";
import { OAuthSettings } from "./oauthsettings";
import { PolicyDelegationSettings } from "./policydelegationsettings";
import { ReauthSettings } from "./reauthsettings";


// AccessSettings
/** 
 * Access related settings for IAP protected apps.
**/
export class AccessSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedDomainsSettings" })
  allowedDomainsSettings?: AllowedDomainsSettings;

  @Metadata({ data: "json, name=corsSettings" })
  corsSettings?: CorsSettings;

  @Metadata({ data: "json, name=gcipSettings" })
  gcipSettings?: GcipSettings;

  @Metadata({ data: "json, name=oauthSettings" })
  oauthSettings?: OAuthSettings;

  @Metadata({ data: "json, name=policyDelegationSettings" })
  policyDelegationSettings?: PolicyDelegationSettings;

  @Metadata({ data: "json, name=reauthSettings" })
  reauthSettings?: ReauthSettings;
}
