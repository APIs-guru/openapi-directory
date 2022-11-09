import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatientAddress } from "./patientaddress";
import { PatientGenderEnum } from "./patientgenderenum";
import { Identifier } from "./identifier";


export class ShareProfileRequestPatientUserDemographics extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PatientAddress;

  @Metadata({ data: "json, name=dayOfBirth" })
  dayOfBirth?: number;

  @Metadata({ data: "json, name=gender" })
  gender: PatientGenderEnum;

  @Metadata({ data: "json, name=healthId" })
  healthId: string;

  @Metadata({ data: "json, name=healthIdNumber" })
  healthIdNumber: string;

  @Metadata({ data: "json, name=identifiers", elemType: shared.Identifier })
  identifiers?: Identifier[];

  @Metadata({ data: "json, name=monthOfBirth" })
  monthOfBirth?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=yearOfBirth" })
  yearOfBirth: number;
}


export class ShareProfileRequestPatient extends SpeakeasyBase {
  @Metadata({ data: "json, name=hipCode" })
  hipCode?: string;

  @Metadata({ data: "json, name=userDemographics" })
  userDemographics: ShareProfileRequestPatientUserDemographics;
}


export class ShareProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=patient" })
  patient: ShareProfileRequestPatient;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
