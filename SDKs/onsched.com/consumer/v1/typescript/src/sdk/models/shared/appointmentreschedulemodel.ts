import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppointmentRescheduleModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=travelAppointmentId" })
  travelAppointmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=travelTimeMins" })
  travelTimeMins?: number;
}
