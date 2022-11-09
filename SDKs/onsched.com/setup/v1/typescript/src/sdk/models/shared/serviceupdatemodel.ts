import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ServiceFeesUpdateModel } from "./servicefeesupdatemodel";
import { ServiceOptionsUpdateModel } from "./serviceoptionsupdatemodel";
import { ServiceSettingsUpdateModel } from "./servicesettingsupdatemodel";


export class ServiceUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=availability" })
  availability?: AvailabilityInputModel;

  @Metadata({ data: "json, name=bookingInterval" })
  bookingInterval?: number;

  @Metadata({ data: "json, name=bookingLimit" })
  bookingLimit?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=fees" })
  fees?: ServiceFeesUpdateModel;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=maxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "json, name=maxGroupSize" })
  maxGroupSize?: number;

  @Metadata({ data: "json, name=mediaPageUrl" })
  mediaPageUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=options" })
  options?: ServiceOptionsUpdateModel;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=serviceGroupId" })
  serviceGroupId?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: ServiceSettingsUpdateModel;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
