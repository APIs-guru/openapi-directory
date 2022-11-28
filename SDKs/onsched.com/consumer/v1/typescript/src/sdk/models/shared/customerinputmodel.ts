import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressInputModel } from "./addressinputmodel";
import { ContactInputModel } from "./contactinputmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";



export class CustomerInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AddressInputModel;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: ContactInputModel;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: CustomFieldInputModel;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationType" })
  notificationType?: string;

  @SpeakeasyMetadata({ data: "json, name=sendLeadNotification" })
  sendLeadNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stripeCustomerId" })
  stripeCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}
