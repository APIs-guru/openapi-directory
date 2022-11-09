import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressInputModel } from "./addressinputmodel";
import { ContactInputModel } from "./contactinputmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";


export class CustomerInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: AddressInputModel;

  @Metadata({ data: "json, name=contact" })
  contact?: ContactInputModel;

  @Metadata({ data: "json, name=customFields" })
  customFields?: CustomFieldInputModel;

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

  @Metadata({ data: "json, name=sendLeadNotification" })
  sendLeadNotification?: boolean;

  @Metadata({ data: "json, name=stripeCustomerId" })
  stripeCustomerId?: string;

  @Metadata({ data: "json, name=type" })
  type?: number;
}
