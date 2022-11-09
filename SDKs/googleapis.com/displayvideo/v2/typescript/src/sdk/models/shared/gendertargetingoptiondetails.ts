import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GenderTargetingOptionDetailsGenderEnum {
    GenderUnspecified = "GENDER_UNSPECIFIED"
,    GenderMale = "GENDER_MALE"
,    GenderFemale = "GENDER_FEMALE"
,    GenderUnknown = "GENDER_UNKNOWN"
}


// GenderTargetingOptionDetails
/** 
 * Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
**/
export class GenderTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=gender" })
  gender?: GenderTargetingOptionDetailsGenderEnum;
}
