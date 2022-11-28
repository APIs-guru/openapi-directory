import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AvailabilityViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessName" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=calendarResourceGroupId" })
  calendarResourceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=firstAvailableDate" })
  firstAvailableDate?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceDescription" })
  resourceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceIds" })
  resourceIds?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDescription" })
  serviceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDuration" })
  serviceDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=tzRequested" })
  tzRequested?: number;
}
