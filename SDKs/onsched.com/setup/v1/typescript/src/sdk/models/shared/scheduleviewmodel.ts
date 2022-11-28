import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingsPerSlot" })
  bookingsPerSlot?: number;

  @SpeakeasyMetadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deletedTime" })
  deletedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: number;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceGroupId" })
  resourceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
