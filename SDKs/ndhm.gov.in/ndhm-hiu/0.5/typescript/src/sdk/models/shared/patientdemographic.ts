import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatientGenderEnum } from "./patientgenderenum";
import { AuthConfirmIdentifier } from "./authconfirmidentifier";


// PatientDemographic
/** 
 * Demographic details are only required for demographic auth at this point. Demographic details must be same as registered
**/
export class PatientDemographic extends SpeakeasyBase {
  @Metadata({ data: "json, name=dateOfBirth" })
  dateOfBirth: string;

  @Metadata({ data: "json, name=gender" })
  gender: PatientGenderEnum;

  @Metadata({ data: "json, name=identifier" })
  identifier?: AuthConfirmIdentifier;

  @Metadata({ data: "json, name=name" })
  name: string;
}
