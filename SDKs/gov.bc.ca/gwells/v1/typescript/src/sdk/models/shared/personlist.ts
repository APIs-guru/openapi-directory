import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistrationsList } from "./registrationslist";



export class PersonList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact_cell" })
  contactCell?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_tel" })
  contactTel?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=person_guid" })
  personGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=registrations", elemType: RegistrationsList })
  registrations?: RegistrationsList[];

  @SpeakeasyMetadata({ data: "json, name=surname" })
  surname: string;
}
