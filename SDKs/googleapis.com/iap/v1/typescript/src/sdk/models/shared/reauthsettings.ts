import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReauthSettingsMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED",
    Login = "LOGIN",
    SecureKey = "SECURE_KEY",
    EnrolledSecondFactors = "ENROLLED_SECOND_FACTORS"
}

export enum ReauthSettingsPolicyTypeEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    Minimum = "MINIMUM",
    Default = "DEFAULT"
}


// ReauthSettings
/** 
 * Configuration for IAP reauthentication policies.
**/
export class ReauthSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxAge" })
  maxAge?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: ReauthSettingsMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=policyType" })
  policyType?: ReauthSettingsPolicyTypeEnum;
}
