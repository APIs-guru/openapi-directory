import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ServiceFeesUpdateModel } from "./servicefeesupdatemodel";
import { ServiceOptionsUpdateModel } from "./serviceoptionsupdatemodel";
import { ServiceSettingsUpdateModel } from "./servicesettingsupdatemodel";



export class ServiceUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: AvailabilityInputModel;

  @SpeakeasyMetadata({ data: "json, name=bookingInterval" })
  bookingInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=bookingLimit" })
  bookingLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=fees" })
  fees?: ServiceFeesUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=maxGroupSize" })
  maxGroupSize?: number;

  @SpeakeasyMetadata({ data: "json, name=mediaPageUrl" })
  mediaPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: ServiceOptionsUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serviceGroupId" })
  serviceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: ServiceSettingsUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
