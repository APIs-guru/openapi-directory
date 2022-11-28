import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ParentalStatusTargetingOptionDetailsParentalStatusEnum {
    ParentalStatusUnspecified = "PARENTAL_STATUS_UNSPECIFIED",
    ParentalStatusParent = "PARENTAL_STATUS_PARENT",
    ParentalStatusNotAParent = "PARENTAL_STATUS_NOT_A_PARENT",
    ParentalStatusUnknown = "PARENTAL_STATUS_UNKNOWN"
}
/**
 * Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
**/
export declare class ParentalStatusTargetingOptionDetails extends SpeakeasyBase {
    parentalStatus?: ParentalStatusTargetingOptionDetailsParentalStatusEnum;
}
