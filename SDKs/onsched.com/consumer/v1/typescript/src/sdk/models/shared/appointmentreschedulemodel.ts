import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppointmentRescheduleModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=travelAppointmentId" })
  travelAppointmentId?: string;

  @Metadata({ data: "json, name=travelTimeMins" })
  travelTimeMins?: number;
}
