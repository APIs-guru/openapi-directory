import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiBillingPeriodUsageOut } from "./apibillingperiodusageout";
import { ApiPlanSubscriptionOut } from "./apiplansubscriptionout";


export class ApiPeriodUsageOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingPeriod" })
  billingPeriod?: ApiBillingPeriodUsageOut;

  @Metadata({ data: "json, name=overageCurrency" })
  overageCurrency?: string;

  @Metadata({ data: "json, name=overageExclTax" })
  overageExclTax?: number;

  @Metadata({ data: "json, name=overageInclTax" })
  overageInclTax?: number;

  @Metadata({ data: "json, name=overageQuantity" })
  overageQuantity?: number;

  @Metadata({ data: "json, name=subscription" })
  subscription?: ApiPlanSubscriptionOut;
}
