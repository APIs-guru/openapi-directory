import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionView } from "./subscriptionview";



export class ProductView extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: SubscriptionView })
  subscriptions?: SubscriptionView[];

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
