import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AvailabilityViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessName" })
  businessName?: string;

  @Metadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @Metadata({ data: "json, name=calendarResourceGroupId" })
  calendarResourceGroupId?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=firstAvailableDate" })
  firstAvailableDate?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=resourceDescription" })
  resourceDescription?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceIds" })
  resourceIds?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=serviceDescription" })
  serviceDescription?: string;

  @Metadata({ data: "json, name=serviceDuration" })
  serviceDuration?: number;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=tzRequested" })
  tzRequested?: number;
}
