import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscriptionView } from "./subscriptionview";


export class ProductView extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom" })
  custom?: any;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=subscriptions", elemType: shared.SubscriptionView })
  subscriptions?: SubscriptionView[];

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
