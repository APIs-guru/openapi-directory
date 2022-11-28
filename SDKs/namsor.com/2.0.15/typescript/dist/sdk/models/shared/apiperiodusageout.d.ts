import { SpeakeasyBase } from "../../../internal/utils";
import { ApiBillingPeriodUsageOut } from "./apibillingperiodusageout";
import { ApiPlanSubscriptionOut } from "./apiplansubscriptionout";
export declare class ApiPeriodUsageOut extends SpeakeasyBase {
    billingPeriod?: ApiBillingPeriodUsageOut;
    overageCurrency?: string;
    overageExclTax?: number;
    overageInclTax?: number;
    overageQuantity?: number;
    subscription?: ApiPlanSubscriptionOut;
}
