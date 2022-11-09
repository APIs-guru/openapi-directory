import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED"
,    PhoneSms = "PHONE_SMS"
}

export enum GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
,    Mandatory = "MANDATORY"
}


// GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig
/** 
 * Options related to MultiFactor Authentication for the project.
**/
export class GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabledProviders" })
  enabledProviders?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigEnabledProvidersEnum[];

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfigStateEnum;
}
