import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduleViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingsPerSlot" })
  bookingsPerSlot?: number;

  @Metadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @Metadata({ data: "json, name=deletedTime" })
  deletedTime?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=interval" })
  interval?: number;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=resourceGroupId" })
  resourceGroupId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
