import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { SubscriptionPeriod } from "./subscriptionperiod";



export class HiuSubscriptionContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: SubscriptionCategoryEnum[];

  @SpeakeasyMetadata({ data: "json, name=hip" })
  hip?: OrganizationRepresentation;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period: SubscriptionPeriod;
}
