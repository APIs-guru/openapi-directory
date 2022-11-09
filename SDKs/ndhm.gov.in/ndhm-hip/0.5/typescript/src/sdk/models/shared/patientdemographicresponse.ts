import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatientAddress } from "./patientaddress";
import { PatientGenderEnum } from "./patientgenderenum";
import { Identifier } from "./identifier";


export class PatientDemographicResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PatientAddress;

  @Metadata({ data: "json, name=gender" })
  gender: PatientGenderEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=identifiers", elemType: shared.Identifier })
  identifiers?: Identifier[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=yearOfBirth" })
  yearOfBirth: number;
}
