import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ContactUpdateModel } from "./contactupdatemodel";
import { CustomFieldUpdateModel } from "./customfieldupdatemodel";
import { ResourceOptionsUpdateModel } from "./resourceoptionsupdatemodel";


export class ResourceUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: AddressUpdateModel;

  @Metadata({ data: "json, name=availability" })
  availability?: AvailabilityInputModel;

  @Metadata({ data: "json, name=contact" })
  contact?: ContactUpdateModel;

  @Metadata({ data: "json, name=customFields" })
  customFields?: CustomFieldUpdateModel;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options" })
  options?: ResourceOptionsUpdateModel;

  @Metadata({ data: "json, name=serviceIds" })
  serviceIds?: string[];

  @Metadata({ data: "json, name=timezoneId" })
  timezoneId?: string;
}
