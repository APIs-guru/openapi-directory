import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ContactResultTypesEnum {
    Billing = "billing",
    Company = "company",
    Executive = "executive",
    Online = "online"
}


export class ContactResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=fax_number" })
  faxNumber: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "json, name=primary_contact" })
  primaryContact: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types: ContactResultTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
