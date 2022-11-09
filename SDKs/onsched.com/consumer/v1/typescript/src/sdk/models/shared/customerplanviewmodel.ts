import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomerPlanViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=serviceGroupId" })
  serviceGroupId?: string;

  @Metadata({ data: "json, name=stripePlanId" })
  stripePlanId?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
