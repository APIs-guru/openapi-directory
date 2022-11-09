import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=registration_no" })
  registrationNo?: string;

  @Metadata({ data: "json, name=registries_activity" })
  registriesActivity: string;
}
