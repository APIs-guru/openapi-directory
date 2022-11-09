import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { SubscriptionPeriod } from "./subscriptionperiod";


export class HiuSubscriptionContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories" })
  categories: SubscriptionCategoryEnum[];

  @Metadata({ data: "json, name=hip" })
  hip?: OrganizationRepresentation;

  @Metadata({ data: "json, name=period" })
  period: SubscriptionPeriod;
}
