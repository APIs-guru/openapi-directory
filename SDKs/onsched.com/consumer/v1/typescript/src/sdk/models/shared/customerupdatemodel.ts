import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { ContactUpdateModel } from "./contactupdatemodel";
import { CustomFieldUpdateModel } from "./customfieldupdatemodel";



export class CustomerUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AddressUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: ContactUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: CustomFieldUpdateModel;

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

  @SpeakeasyMetadata({ data: "json, name=stripeCustomerId" })
  stripeCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;
}
