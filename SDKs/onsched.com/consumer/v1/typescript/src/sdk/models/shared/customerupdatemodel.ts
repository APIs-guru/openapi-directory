import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { ContactUpdateModel } from "./contactupdatemodel";
import { CustomFieldUpdateModel } from "./customfieldupdatemodel";


export class CustomerUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: AddressUpdateModel;

  @Metadata({ data: "json, name=contact" })
  contact?: ContactUpdateModel;

  @Metadata({ data: "json, name=customFields" })
  customFields?: CustomFieldUpdateModel;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstname" })
  firstname?: string;

  @Metadata({ data: "json, name=lastname" })
  lastname?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationType" })
  notificationType?: string;

  @Metadata({ data: "json, name=stripeCustomerId" })
  stripeCustomerId?: string;

  @Metadata({ data: "json, name=type" })
  type?: number;
}
