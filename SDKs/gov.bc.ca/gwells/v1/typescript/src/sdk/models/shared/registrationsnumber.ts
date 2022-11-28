import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistrationsNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registration_no" })
  registrationNo?: string;

  @SpeakeasyMetadata({ data: "json, name=registries_activity" })
  registriesActivity: string;
}
