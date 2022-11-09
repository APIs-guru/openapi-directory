import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Identifier } from "./identifier";
import { Identifier } from "./identifier";

export enum PatientDiscoveryRequestPatientGenderEnum {
    M = "M"
,    F = "F"
,    O = "O"
,    U = "U"
}


export class PatientDiscoveryRequestPatient extends SpeakeasyBase {
  @Metadata({ data: "json, name=gender" })
  gender: PatientDiscoveryRequestPatientGenderEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=unverifiedIdentifiers", elemType: shared.Identifier })
  unverifiedIdentifiers?: Identifier[];

  @Metadata({ data: "json, name=verifiedIdentifiers", elemType: shared.Identifier })
  verifiedIdentifiers: Identifier[];

  @Metadata({ data: "json, name=yearOfBirth" })
  yearOfBirth: number;
}


export class PatientDiscoveryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=patient" })
  patient: PatientDiscoveryRequestPatient;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}
