import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudBillingBudgetsV1BudgetAmount } from "./googlecloudbillingbudgetsv1budgetamount";
import { GoogleCloudBillingBudgetsV1Filter } from "./googlecloudbillingbudgetsv1filter";
import { GoogleCloudBillingBudgetsV1NotificationsRule } from "./googlecloudbillingbudgetsv1notificationsrule";
import { GoogleCloudBillingBudgetsV1ThresholdRule } from "./googlecloudbillingbudgetsv1thresholdrule";


// GoogleCloudBillingBudgetsV1Budget
/** 
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
export class GoogleCloudBillingBudgetsV1Budget extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: GoogleCloudBillingBudgetsV1BudgetAmount;

  @Metadata({ data: "json, name=budgetFilter" })
  budgetFilter?: GoogleCloudBillingBudgetsV1Filter;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationsRule" })
  notificationsRule?: GoogleCloudBillingBudgetsV1NotificationsRule;

  @Metadata({ data: "json, name=thresholdRules", elemType: shared.GoogleCloudBillingBudgetsV1ThresholdRule })
  thresholdRules?: GoogleCloudBillingBudgetsV1ThresholdRule[];
}
