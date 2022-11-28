import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientGenderEnum } from "./patientgenderenum";
import { AuthConfirmIdentifier } from "./authconfirmidentifier";



// PatientDemographic
/** 
 * Demographic details must be same as registered
**/
export class PatientDemographic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dateOfBirth" })
  dateOfBirth: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender: PatientGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: AuthConfirmIdentifier;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
