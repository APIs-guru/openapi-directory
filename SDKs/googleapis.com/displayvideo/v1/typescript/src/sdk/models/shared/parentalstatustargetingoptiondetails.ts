import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ParentalStatusTargetingOptionDetailsParentalStatusEnum {
    ParentalStatusUnspecified = "PARENTAL_STATUS_UNSPECIFIED",
    ParentalStatusParent = "PARENTAL_STATUS_PARENT",
    ParentalStatusNotAParent = "PARENTAL_STATUS_NOT_A_PARENT",
    ParentalStatusUnknown = "PARENTAL_STATUS_UNKNOWN"
}


// ParentalStatusTargetingOptionDetails
/** 
 * Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
**/
export class ParentalStatusTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parentalStatus" })
  parentalStatus?: ParentalStatusTargetingOptionDetailsParentalStatusEnum;
}
