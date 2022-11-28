import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCategoryEnum } from "./subscriptioncategoryenum";
import { OrganizationRepresentation } from "./organizationrepresentation";
import { SubscriptionPeriod } from "./subscriptionperiod";
export declare class HiuSubscriptionContext extends SpeakeasyBase {
    categories: SubscriptionCategoryEnum[];
    hip?: OrganizationRepresentation;
    period: SubscriptionPeriod;
}
