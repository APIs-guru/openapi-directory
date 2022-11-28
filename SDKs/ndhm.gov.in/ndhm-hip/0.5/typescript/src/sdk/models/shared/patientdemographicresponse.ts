import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientAddress } from "./patientaddress";
import { PatientGenderEnum } from "./patientgenderenum";
import { Identifier } from "./identifier";



export class PatientDemographicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PatientAddress;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender: PatientGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=identifiers", elemType: Identifier })
  identifiers?: Identifier[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=yearOfBirth" })
  yearOfBirth: number;
}
