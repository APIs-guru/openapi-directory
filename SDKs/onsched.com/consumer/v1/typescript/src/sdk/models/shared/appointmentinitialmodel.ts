import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppointmentInitialModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookedBy" })
  bookedBy?: string;

  @Metadata({ data: "json, name=bookingWindowId" })
  bookingWindowId?: string;

  @Metadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=customerMessage" })
  customerMessage?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @Metadata({ data: "json, name=groupSize" })
  groupSize?: number;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=phoneType" })
  phoneType?: string;

  @Metadata({ data: "json, name=resourceGroupId" })
  resourceGroupId?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceIds" })
  resourceIds?: string;

  @Metadata({ data: "json, name=serviceAllocationId" })
  serviceAllocationId?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @Metadata({ data: "json, name=timezoneName" })
  timezoneName?: string;

  @Metadata({ data: "json, name=travelAppointmentId" })
  travelAppointmentId?: string;

  @Metadata({ data: "json, name=travelTimeMins" })
  travelTimeMins?: number;
}
