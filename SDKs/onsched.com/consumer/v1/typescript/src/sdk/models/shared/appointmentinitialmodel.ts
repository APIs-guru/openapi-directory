import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppointmentInitialModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookedBy" })
  bookedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=bookingWindowId" })
  bookingWindowId?: string;

  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=customerMessage" })
  customerMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=endDateTime" })
  endDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=groupSize" })
  groupSize?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneType" })
  phoneType?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceGroupId" })
  resourceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceIds" })
  resourceIds?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAllocationId" })
  serviceAllocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=timezoneName" })
  timezoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=travelAppointmentId" })
  travelAppointmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=travelTimeMins" })
  travelTimeMins?: number;
}
