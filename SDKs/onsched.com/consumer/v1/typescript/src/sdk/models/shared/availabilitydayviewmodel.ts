import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AvailabilityDayViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceDescription" })
  resourceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDescription" })
  serviceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=tzRequested" })
  tzRequested?: number;
}
