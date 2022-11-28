import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ValidationResultValidatorEnum {
    ValidatorTypeUnspecified = "VALIDATOR_TYPE_UNSPECIFIED",
    MembershipId = "MEMBERSHIP_ID",
    CrossProjectPermission = "CROSS_PROJECT_PERMISSION"
}


// ValidationResult
/** 
 * ValidationResults are results set by each validator running during ValidateCreateMembership.
**/
export class ValidationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validator" })
  validator?: ValidationResultValidatorEnum;
}
