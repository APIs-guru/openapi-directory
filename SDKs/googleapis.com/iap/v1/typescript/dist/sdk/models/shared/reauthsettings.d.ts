import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ReauthSettingsMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED",
    Login = "LOGIN",
    SecureKey = "SECURE_KEY"
}
export declare enum ReauthSettingsPolicyTypeEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    Minimum = "MINIMUM",
    Default = "DEFAULT"
}
/**
 * Configuration for IAP reauthentication policies.
**/
export declare class ReauthSettings extends SpeakeasyBase {
    maxAge?: string;
    method?: ReauthSettingsMethodEnum;
    policyType?: ReauthSettingsPolicyTypeEnum;
}
