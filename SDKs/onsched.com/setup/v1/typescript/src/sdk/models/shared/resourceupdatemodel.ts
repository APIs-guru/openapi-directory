import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ContactUpdateModel } from "./contactupdatemodel";
import { CustomFieldUpdateModel } from "./customfieldupdatemodel";
import { ResourceOptionsUpdateModel } from "./resourceoptionsupdatemodel";



export class ResourceUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AddressUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: AvailabilityInputModel;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: ContactUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: CustomFieldUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: ResourceOptionsUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=serviceIds" })
  serviceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=timezoneId" })
  timezoneId?: string;
}
