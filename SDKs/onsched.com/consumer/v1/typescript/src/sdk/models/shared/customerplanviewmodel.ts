import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomerPlanViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceGroupId" })
  serviceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=stripePlanId" })
  stripePlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}
