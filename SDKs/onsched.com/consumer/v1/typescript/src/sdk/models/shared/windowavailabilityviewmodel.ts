import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WindowAvailabilityViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessName" })
  businessName?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=resourceDescription" })
  resourceDescription?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

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

  @Metadata({ data: "json, name=tzRequested" })
  tzRequested?: number;
}
