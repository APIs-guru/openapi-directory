import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegistrationsNumber } from "./registrationsnumber";


export class PersonName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=person_guid" })
  personGuid?: string;

  @Metadata({ data: "json, name=registrations", elemType: shared.RegistrationsNumber })
  registrations?: RegistrationsNumber[];
}
