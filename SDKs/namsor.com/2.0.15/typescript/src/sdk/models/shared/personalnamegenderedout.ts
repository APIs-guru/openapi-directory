import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PersonalNameGenderedOutLikelyGenderEnum {
    Male = "male"
,    Female = "female"
,    Unknown = "unknown"
}


// PersonalNameGenderedOut
/** 
 * Classified genderized names
**/
export class PersonalNameGenderedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=genderScale" })
  genderScale?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=likelyGender" })
  likelyGender?: PersonalNameGenderedOutLikelyGenderEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: number;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
