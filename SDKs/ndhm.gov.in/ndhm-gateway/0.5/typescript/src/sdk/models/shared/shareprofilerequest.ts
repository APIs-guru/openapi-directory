import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientAddress } from "./patientaddress";
import { PatientGenderEnum } from "./patientgenderenum";
import { Identifier } from "./identifier";



export class ShareProfileRequestPatientUserDemographics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PatientAddress;

  @SpeakeasyMetadata({ data: "json, name=dayOfBirth" })
  dayOfBirth?: number;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender: PatientGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=healthId" })
  healthId: string;

  @SpeakeasyMetadata({ data: "json, name=healthIdNumber" })
  healthIdNumber: string;

  @SpeakeasyMetadata({ data: "json, name=identifiers", elemType: Identifier })
  identifiers?: Identifier[];

  @SpeakeasyMetadata({ data: "json, name=monthOfBirth" })
  monthOfBirth?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=yearOfBirth" })
  yearOfBirth: number;
}


export class ShareProfileRequestPatient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hipCode" })
  hipCode?: string;

  @SpeakeasyMetadata({ data: "json, name=userDemographics" })
  userDemographics: ShareProfileRequestPatientUserDemographics;
}


export class ShareProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: ShareProfileRequestPatient;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
