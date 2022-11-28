import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PasswordValidationPolicyComplexityEnum {
    ComplexityUnspecified = "COMPLEXITY_UNSPECIFIED",
    ComplexityDefault = "COMPLEXITY_DEFAULT"
}


// PasswordValidationPolicy
/** 
 * Database instance local user password validation policy
**/
export class PasswordValidationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=complexity" })
  complexity?: PasswordValidationPolicyComplexityEnum;

  @SpeakeasyMetadata({ data: "json, name=disallowUsernameSubstring" })
  disallowUsernameSubstring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enablePasswordPolicy" })
  enablePasswordPolicy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength?: number;

  @SpeakeasyMetadata({ data: "json, name=passwordChangeInterval" })
  passwordChangeInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=reuseInterval" })
  reuseInterval?: number;
}
