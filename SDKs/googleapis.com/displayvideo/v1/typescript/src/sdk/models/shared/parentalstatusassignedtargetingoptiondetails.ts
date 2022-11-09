import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum {
    ParentalStatusUnspecified = "PARENTAL_STATUS_UNSPECIFIED"
,    ParentalStatusParent = "PARENTAL_STATUS_PARENT"
,    ParentalStatusNotAParent = "PARENTAL_STATUS_NOT_A_PARENT"
,    ParentalStatusUnknown = "PARENTAL_STATUS_UNKNOWN"
}


// ParentalStatusAssignedTargetingOptionDetails
/** 
 * Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.
**/
export class ParentalStatusAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=parentalStatus" })
  parentalStatus?: ParentalStatusAssignedTargetingOptionDetailsParentalStatusEnum;

  @Metadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
