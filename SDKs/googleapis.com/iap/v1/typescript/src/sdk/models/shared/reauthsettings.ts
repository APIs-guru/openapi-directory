import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReauthSettingsMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED"
,    Login = "LOGIN"
,    SecureKey = "SECURE_KEY"
}

export enum ReauthSettingsPolicyTypeEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED"
,    Minimum = "MINIMUM"
,    Default = "DEFAULT"
}


// ReauthSettings
/** 
 * Configuration for IAP reauthentication policies.
**/
export class ReauthSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxAge" })
  maxAge?: string;

  @Metadata({ data: "json, name=method" })
  method?: ReauthSettingsMethodEnum;

  @Metadata({ data: "json, name=policyType" })
  policyType?: ReauthSettingsPolicyTypeEnum;
}
