import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RegistrationsList } from "./registrationslist";


export class PersonList extends SpeakeasyBase {
  @Metadata({ data: "json, name=contact_cell" })
  contactCell?: string;

  @Metadata({ data: "json, name=contact_email" })
  contactEmail?: string;

  @Metadata({ data: "json, name=contact_tel" })
  contactTel?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName: string;

  @Metadata({ data: "json, name=person_guid" })
  personGuid?: string;

  @Metadata({ data: "json, name=registrations", elemType: shared.RegistrationsList })
  registrations?: RegistrationsList[];

  @Metadata({ data: "json, name=surname" })
  surname: string;
}
