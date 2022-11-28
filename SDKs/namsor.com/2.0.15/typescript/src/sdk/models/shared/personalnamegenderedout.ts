import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PersonalNameGenderedOutLikelyGenderEnum {
    Male = "male",
    Female = "female",
    Unknown = "unknown"
}


// PersonalNameGenderedOut
/** 
 * Classified genderized names
**/
export class PersonalNameGenderedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=genderScale" })
  genderScale?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=likelyGender" })
  likelyGender?: PersonalNameGenderedOutLikelyGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
