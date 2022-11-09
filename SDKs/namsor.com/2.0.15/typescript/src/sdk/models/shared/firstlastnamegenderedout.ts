import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FirstLastNameGenderedOutLikelyGenderEnum {
    Male = "male"
,    Female = "female"
,    Unknown = "unknown"
}


// FirstLastNameGenderedOut
/** 
 * Represents the output of inferring the LIKELY gender from a personal name.
**/
export class FirstLastNameGenderedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=genderScale" })
  genderScale?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=likelyGender" })
  likelyGender?: FirstLastNameGenderedOutLikelyGenderEnum;

  @Metadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: number;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
