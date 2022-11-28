import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1BudgetAmount } from "./googlecloudbillingbudgetsv1budgetamount";
import { GoogleCloudBillingBudgetsV1Filter } from "./googlecloudbillingbudgetsv1filter";
import { GoogleCloudBillingBudgetsV1NotificationsRule } from "./googlecloudbillingbudgetsv1notificationsrule";
import { GoogleCloudBillingBudgetsV1ThresholdRule } from "./googlecloudbillingbudgetsv1thresholdrule";



// GoogleCloudBillingBudgetsV1Budget
/** 
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
export class GoogleCloudBillingBudgetsV1Budget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: GoogleCloudBillingBudgetsV1BudgetAmount;

  @SpeakeasyMetadata({ data: "json, name=budgetFilter" })
  budgetFilter?: GoogleCloudBillingBudgetsV1Filter;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationsRule" })
  notificationsRule?: GoogleCloudBillingBudgetsV1NotificationsRule;

  @SpeakeasyMetadata({ data: "json, name=thresholdRules", elemType: GoogleCloudBillingBudgetsV1ThresholdRule })
  thresholdRules?: GoogleCloudBillingBudgetsV1ThresholdRule[];
}


// GoogleCloudBillingBudgetsV1BudgetInput
/** 
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
export class GoogleCloudBillingBudgetsV1BudgetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: GoogleCloudBillingBudgetsV1BudgetAmount;

  @SpeakeasyMetadata({ data: "json, name=budgetFilter" })
  budgetFilter?: GoogleCloudBillingBudgetsV1Filter;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationsRule" })
  notificationsRule?: GoogleCloudBillingBudgetsV1NotificationsRule;

  @SpeakeasyMetadata({ data: "json, name=thresholdRules", elemType: GoogleCloudBillingBudgetsV1ThresholdRule })
  thresholdRules?: GoogleCloudBillingBudgetsV1ThresholdRule[];
}
