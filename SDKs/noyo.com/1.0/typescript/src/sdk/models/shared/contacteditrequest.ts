import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ContactEditRequestTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}


export class ContactEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fax_number" })
  faxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_contact" })
  primaryContact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: ContactEditRequestTypesEnum[];
}
