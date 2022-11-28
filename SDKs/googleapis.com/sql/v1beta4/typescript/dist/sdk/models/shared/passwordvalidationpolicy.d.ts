import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PasswordValidationPolicyComplexityEnum {
    ComplexityUnspecified = "COMPLEXITY_UNSPECIFIED",
    ComplexityDefault = "COMPLEXITY_DEFAULT"
}
/**
 * Database instance local user password validation policy
**/
export declare class PasswordValidationPolicy extends SpeakeasyBase {
    complexity?: PasswordValidationPolicyComplexityEnum;
    disallowUsernameSubstring?: boolean;
    enablePasswordPolicy?: boolean;
    minLength?: number;
    passwordChangeInterval?: string;
    reuseInterval?: number;
}
