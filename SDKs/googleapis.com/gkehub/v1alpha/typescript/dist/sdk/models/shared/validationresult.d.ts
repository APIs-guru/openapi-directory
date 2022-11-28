import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ValidationResultValidatorEnum {
    ValidatorTypeUnspecified = "VALIDATOR_TYPE_UNSPECIFIED",
    MembershipId = "MEMBERSHIP_ID",
    CrossProjectPermission = "CROSS_PROJECT_PERMISSION"
}
/**
 * ValidationResults are results set by each validator running during ValidateCreateMembership.
**/
export declare class ValidationResult extends SpeakeasyBase {
    result?: string;
    success?: boolean;
    validator?: ValidationResultValidatorEnum;
}
