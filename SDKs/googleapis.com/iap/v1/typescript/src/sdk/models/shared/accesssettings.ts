import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=allowedDomainsSettings" })
  allowedDomainsSettings?: AllowedDomainsSettings;

  @SpeakeasyMetadata({ data: "json, name=corsSettings" })
  corsSettings?: CorsSettings;

  @SpeakeasyMetadata({ data: "json, name=gcipSettings" })
  gcipSettings?: GcipSettings;

  @SpeakeasyMetadata({ data: "json, name=oauthSettings" })
  oauthSettings?: OAuthSettings;

  @SpeakeasyMetadata({ data: "json, name=policyDelegationSettings" })
  policyDelegationSettings?: PolicyDelegationSettings;

  @SpeakeasyMetadata({ data: "json, name=reauthSettings" })
  reauthSettings?: ReauthSettings;
}
