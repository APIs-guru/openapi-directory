import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ValidationResultValidatorEnum {
    ValidatorTypeUnspecified = "VALIDATOR_TYPE_UNSPECIFIED"
,    MembershipId = "MEMBERSHIP_ID"
,    CrossProjectPermission = "CROSS_PROJECT_PERMISSION"
}


// ValidationResult
/** 
 * ValidationResults are results set by each validator running during ValidateCreateMembership.
**/
export class ValidationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;

  @Metadata({ data: "json, name=validator" })
  validator?: ValidationResultValidatorEnum;
}
