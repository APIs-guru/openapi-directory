import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistrationsNumber } from "./registrationsnumber";



export class PersonName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=person_guid" })
  personGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=registrations", elemType: RegistrationsNumber })
  registrations?: RegistrationsNumber[];
}
