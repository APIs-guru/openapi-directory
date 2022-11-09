import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PasswordValidationPolicyComplexityEnum {
    ComplexityUnspecified = "COMPLEXITY_UNSPECIFIED"
,    ComplexityDefault = "COMPLEXITY_DEFAULT"
}


// PasswordValidationPolicy
/** 
 * Database instance local user password validation policy
**/
export class PasswordValidationPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=complexity" })
  complexity?: PasswordValidationPolicyComplexityEnum;

  @Metadata({ data: "json, name=disallowUsernameSubstring" })
  disallowUsernameSubstring?: boolean;

  @Metadata({ data: "json, name=enablePasswordPolicy" })
  enablePasswordPolicy?: boolean;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;

  @Metadata({ data: "json, name=passwordChangeInterval" })
  passwordChangeInterval?: string;

  @Metadata({ data: "json, name=reuseInterval" })
  reuseInterval?: number;
}
