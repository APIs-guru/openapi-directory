import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1beta1AllUpdatesRule } from "./googlecloudbillingbudgetsv1beta1allupdatesrule";
import { GoogleCloudBillingBudgetsV1beta1BudgetAmount } from "./googlecloudbillingbudgetsv1beta1budgetamount";
import { GoogleCloudBillingBudgetsV1beta1Filter } from "./googlecloudbillingbudgetsv1beta1filter";
import { GoogleCloudBillingBudgetsV1beta1ThresholdRule } from "./googlecloudbillingbudgetsv1beta1thresholdrule";



// GoogleCloudBillingBudgetsV1beta1Budget
/** 
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
export class GoogleCloudBillingBudgetsV1beta1Budget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allUpdatesRule" })
  allUpdatesRule?: GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: GoogleCloudBillingBudgetsV1beta1BudgetAmount;

  @SpeakeasyMetadata({ data: "json, name=budgetFilter" })
  budgetFilter?: GoogleCloudBillingBudgetsV1beta1Filter;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=thresholdRules", elemType: GoogleCloudBillingBudgetsV1beta1ThresholdRule })
  thresholdRules?: GoogleCloudBillingBudgetsV1beta1ThresholdRule[];
}


// GoogleCloudBillingBudgetsV1beta1BudgetInput
/** 
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
export class GoogleCloudBillingBudgetsV1beta1BudgetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allUpdatesRule" })
  allUpdatesRule?: GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: GoogleCloudBillingBudgetsV1beta1BudgetAmount;

  @SpeakeasyMetadata({ data: "json, name=budgetFilter" })
  budgetFilter?: GoogleCloudBillingBudgetsV1beta1Filter;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=thresholdRules", elemType: GoogleCloudBillingBudgetsV1beta1ThresholdRule })
  thresholdRules?: GoogleCloudBillingBudgetsV1beta1ThresholdRule[];
}
