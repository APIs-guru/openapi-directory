import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceAvailabilityViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignoreBusinessHours" })
  ignoreBusinessHours?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
