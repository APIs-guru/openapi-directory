import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ServiceFeesInputModel } from "./servicefeesinputmodel";
import { ServiceOptionsInputModel } from "./serviceoptionsinputmodel";
import { ServiceSettingsInputModel } from "./servicesettingsinputmodel";


export class ServiceInputModel extends SpeakeasyBase {
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
  fees?: ServiceFeesInputModel;

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
  options?: ServiceOptionsInputModel;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=serviceGroupId" })
  serviceGroupId?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: ServiceSettingsInputModel;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
