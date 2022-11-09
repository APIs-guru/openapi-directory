import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressInputModel } from "./addressinputmodel";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ContactInputModel } from "./contactinputmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";
import { ResourceOptionsInputModel } from "./resourceoptionsinputmodel";


export class ResourceInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: AddressInputModel;

  @Metadata({ data: "json, name=availability" })
  availability?: AvailabilityInputModel;

  @Metadata({ data: "json, name=contact" })
  contact?: ContactInputModel;

  @Metadata({ data: "json, name=customFields" })
  customFields?: CustomFieldInputModel;

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
  options?: ResourceOptionsInputModel;

  @Metadata({ data: "json, name=serviceIds" })
  serviceIds?: string[];

  @Metadata({ data: "json, name=timezoneId" })
  timezoneId?: string;
}
