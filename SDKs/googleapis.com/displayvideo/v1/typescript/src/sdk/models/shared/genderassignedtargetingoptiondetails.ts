import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GenderAssignedTargetingOptionDetailsGenderEnum {
    GenderUnspecified = "GENDER_UNSPECIFIED",
    GenderMale = "GENDER_MALE",
    GenderFemale = "GENDER_FEMALE",
    GenderUnknown = "GENDER_UNKNOWN"
}


// GenderAssignedTargetingOptionDetails
/** 
 * Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
**/
export class GenderAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: GenderAssignedTargetingOptionDetailsGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
