import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiBillingPeriodUsageOut } from "./apibillingperiodusageout";
import { ApiPlanSubscriptionOut } from "./apiplansubscriptionout";



export class ApiPeriodUsageOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingPeriod" })
  billingPeriod?: ApiBillingPeriodUsageOut;

  @SpeakeasyMetadata({ data: "json, name=overageCurrency" })
  overageCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=overageExclTax" })
  overageExclTax?: number;

  @SpeakeasyMetadata({ data: "json, name=overageInclTax" })
  overageInclTax?: number;

  @SpeakeasyMetadata({ data: "json, name=overageQuantity" })
  overageQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: ApiPlanSubscriptionOut;
}
