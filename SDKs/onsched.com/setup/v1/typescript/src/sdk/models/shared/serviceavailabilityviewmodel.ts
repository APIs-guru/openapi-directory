import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServiceAvailabilityViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignoreBusinessHours" })
  ignoreBusinessHours?: boolean;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: number;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
