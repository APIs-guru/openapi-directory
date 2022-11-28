import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientGenderEnum } from "./patientgenderenum";
import { Identifier } from "./identifier";



export class PatientDiscoveryRequestPatient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender: PatientGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=unverifiedIdentifiers", elemType: Identifier })
  unverifiedIdentifiers?: Identifier[];

  @SpeakeasyMetadata({ data: "json, name=verifiedIdentifiers", elemType: Identifier })
  verifiedIdentifiers: Identifier[];

  @SpeakeasyMetadata({ data: "json, name=yearOfBirth" })
  yearOfBirth: number;
}


export class PatientDiscoveryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: PatientDiscoveryRequestPatient;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}
