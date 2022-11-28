import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { PrismaConfig } from "./prismaconfig";
export declare enum CampaignBudgetBudgetUnitEnum {
    BudgetUnitUnspecified = "BUDGET_UNIT_UNSPECIFIED",
    BudgetUnitCurrency = "BUDGET_UNIT_CURRENCY",
    BudgetUnitImpressions = "BUDGET_UNIT_IMPRESSIONS"
}
export declare enum CampaignBudgetExternalBudgetSourceEnum {
    ExternalBudgetSourceUnspecified = "EXTERNAL_BUDGET_SOURCE_UNSPECIFIED",
    ExternalBudgetSourceNone = "EXTERNAL_BUDGET_SOURCE_NONE",
    ExternalBudgetSourceMediaOcean = "EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN"
}
/**
 * Settings that control how the campaign budget is allocated.
**/
export declare class CampaignBudget extends SpeakeasyBase {
    budgetAmountMicros?: string;
    budgetId?: string;
    budgetUnit?: CampaignBudgetBudgetUnitEnum;
    dateRange?: DateRange;
    displayName?: string;
    externalBudgetId?: string;
    externalBudgetSource?: CampaignBudgetExternalBudgetSourceEnum;
    invoiceGroupingId?: string;
    prismaConfig?: PrismaConfig;
}
