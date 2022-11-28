import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityInputModel } from "./availabilityinputmodel";



export class ScheduleInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: AvailabilityInputModel;

  @SpeakeasyMetadata({ data: "json, name=bookingsPerSlot" })
  bookingsPerSlot?: number;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceGroupId" })
  resourceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
