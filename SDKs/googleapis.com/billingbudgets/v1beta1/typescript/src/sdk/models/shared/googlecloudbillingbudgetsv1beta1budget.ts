import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBillingBudgetsV1beta1AllUpdatesRule } from "./googlecloudbillingbudgetsv1beta1allupdatesrule";
import { GoogleCloudBillingBudgetsV1beta1BudgetAmount } from "./googlecloudbillingbudgetsv1beta1budgetamount";
import { GoogleCloudBillingBudgetsV1beta1Filter } from "./googlecloudbillingbudgetsv1beta1filter";
import { GoogleCloudBillingBudgetsV1beta1ThresholdRule } from "./googlecloudbillingbudgetsv1beta1thresholdrule";


// GoogleCloudBillingBudgetsV1beta1Budget
/** 
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
export class GoogleCloudBillingBudgetsV1beta1Budget extends SpeakeasyBase {
  @Metadata({ data: "json, name=allUpdatesRule" })
  allUpdatesRule?: GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;

  @Metadata({ data: "json, name=amount" })
  amount?: GoogleCloudBillingBudgetsV1beta1BudgetAmount;

  @Metadata({ data: "json, name=budgetFilter" })
  budgetFilter?: GoogleCloudBillingBudgetsV1beta1Filter;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=thresholdRules", elemType: shared.GoogleCloudBillingBudgetsV1beta1ThresholdRule })
  thresholdRules?: GoogleCloudBillingBudgetsV1beta1ThresholdRule[];
}
