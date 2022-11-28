import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum {
    BasisUnspecified = "BASIS_UNSPECIFIED",
    CurrentSpend = "CURRENT_SPEND",
    ForecastedSpend = "FORECASTED_SPEND"
}


// GoogleCloudBillingBudgetsV1ThresholdRule
/** 
 * ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the [NotificationsRule](#notificationsrule). Threshold rules also affect the fields included in the [JSON data object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) sent to a Pub/Sub topic. Threshold rules are _required_ if using email notifications. Threshold rules are _optional_ if only setting a [`pubsubTopic` NotificationsRule](#NotificationsRule), unless you want your JSON data object to include data about the thresholds you set. For more information, see [set budget threshold rules and actions](https://cloud.google.com/billing/docs/how-to/budgets#budget-actions).
**/
export class GoogleCloudBillingBudgetsV1ThresholdRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spendBasis" })
  spendBasis?: GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum;

  @SpeakeasyMetadata({ data: "json, name=thresholdPercent" })
  thresholdPercent?: number;
}
