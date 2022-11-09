import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AvailabilityInputModel } from "./availabilityinputmodel";


export class ScheduleInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=availability" })
  availability?: AvailabilityInputModel;

  @Metadata({ data: "json, name=bookingsPerSlot" })
  bookingsPerSlot?: number;

  @Metadata({ data: "json, name=interval" })
  interval?: number;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceGroupId" })
  resourceGroupId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
