import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FirstLastNameGenderedOutLikelyGenderEnum {
    Male = "male",
    Female = "female",
    Unknown = "unknown"
}


// FirstLastNameGenderedOut
/** 
 * Represents the output of inferring the LIKELY gender from a personal name.
**/
export class FirstLastNameGenderedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=genderScale" })
  genderScale?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=likelyGender" })
  likelyGender?: FirstLastNameGenderedOutLikelyGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
