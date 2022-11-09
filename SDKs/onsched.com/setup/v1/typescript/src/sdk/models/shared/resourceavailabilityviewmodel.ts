import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResourceAvailabilityViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessId" })
  businessId?: number;

  @Metadata({ data: "json, name=ignoreBusinessHours" })
  ignoreBusinessHours?: boolean;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: number;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=resourceTzo" })
  resourceTzo?: number;
}
