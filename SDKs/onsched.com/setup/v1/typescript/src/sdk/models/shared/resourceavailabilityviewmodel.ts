import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResourceAvailabilityViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessId" })
  businessId?: number;

  @SpeakeasyMetadata({ data: "json, name=ignoreBusinessHours" })
  ignoreBusinessHours?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: number;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceTzo" })
  resourceTzo?: number;
}
