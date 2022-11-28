import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddressInputModel } from "./addressinputmodel";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ContactInputModel } from "./contactinputmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";
import { ResourceOptionsInputModel } from "./resourceoptionsinputmodel";



export class ResourceInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: AddressInputModel;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: AvailabilityInputModel;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: ContactInputModel;

  @SpeakeasyMetadata({ data: "json, name=customFields" })
  customFields?: CustomFieldInputModel;

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
  options?: ResourceOptionsInputModel;

  @SpeakeasyMetadata({ data: "json, name=serviceIds" })
  serviceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=timezoneId" })
  timezoneId?: string;
}
