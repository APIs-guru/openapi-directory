import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1BudgetAmount } from "./googlecloudbillingbudgetsv1budgetamount";
import { GoogleCloudBillingBudgetsV1Filter } from "./googlecloudbillingbudgetsv1filter";
import { GoogleCloudBillingBudgetsV1NotificationsRule } from "./googlecloudbillingbudgetsv1notificationsrule";
import { GoogleCloudBillingBudgetsV1ThresholdRule } from "./googlecloudbillingbudgetsv1thresholdrule";
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
export declare class GoogleCloudBillingBudgetsV1Budget extends SpeakeasyBase {
    amount?: GoogleCloudBillingBudgetsV1BudgetAmount;
    budgetFilter?: GoogleCloudBillingBudgetsV1Filter;
    displayName?: string;
    etag?: string;
    name?: string;
    notificationsRule?: GoogleCloudBillingBudgetsV1NotificationsRule;
    thresholdRules?: GoogleCloudBillingBudgetsV1ThresholdRule[];
}
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
export declare class GoogleCloudBillingBudgetsV1BudgetInput extends SpeakeasyBase {
    amount?: GoogleCloudBillingBudgetsV1BudgetAmount;
    budgetFilter?: GoogleCloudBillingBudgetsV1Filter;
    displayName?: string;
    etag?: string;
    notificationsRule?: GoogleCloudBillingBudgetsV1NotificationsRule;
    thresholdRules?: GoogleCloudBillingBudgetsV1ThresholdRule[];
}
