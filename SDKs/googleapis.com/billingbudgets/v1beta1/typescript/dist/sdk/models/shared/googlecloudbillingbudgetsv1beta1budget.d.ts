import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBillingBudgetsV1beta1AllUpdatesRule } from "./googlecloudbillingbudgetsv1beta1allupdatesrule";
import { GoogleCloudBillingBudgetsV1beta1BudgetAmount } from "./googlecloudbillingbudgetsv1beta1budgetamount";
import { GoogleCloudBillingBudgetsV1beta1Filter } from "./googlecloudbillingbudgetsv1beta1filter";
import { GoogleCloudBillingBudgetsV1beta1ThresholdRule } from "./googlecloudbillingbudgetsv1beta1thresholdrule";
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
export declare class GoogleCloudBillingBudgetsV1beta1Budget extends SpeakeasyBase {
    allUpdatesRule?: GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
    amount?: GoogleCloudBillingBudgetsV1beta1BudgetAmount;
    budgetFilter?: GoogleCloudBillingBudgetsV1beta1Filter;
    displayName?: string;
    etag?: string;
    name?: string;
    thresholdRules?: GoogleCloudBillingBudgetsV1beta1ThresholdRule[];
}
/**
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
export declare class GoogleCloudBillingBudgetsV1beta1BudgetInput extends SpeakeasyBase {
    allUpdatesRule?: GoogleCloudBillingBudgetsV1beta1AllUpdatesRule;
    amount?: GoogleCloudBillingBudgetsV1beta1BudgetAmount;
    budgetFilter?: GoogleCloudBillingBudgetsV1beta1Filter;
    displayName?: string;
    etag?: string;
    thresholdRules?: GoogleCloudBillingBudgetsV1beta1ThresholdRule[];
}
