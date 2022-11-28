import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum {
    ParentalStatusUnspecified = "PARENTAL_STATUS_UNSPECIFIED",
    ParentalStatusParent = "PARENTAL_STATUS_PARENT",
    ParentalStatusNotAParent = "PARENTAL_STATUS_NOT_A_PARENT",
    ParentalStatusUnknown = "PARENTAL_STATUS_UNKNOWN"
}
/**
 * Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
**/
export declare class ParentalStatusAssignedTargetingOptionDetails extends SpeakeasyBase {
    parentalStatus?: ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;
    targetingOptionId?: string;
}
