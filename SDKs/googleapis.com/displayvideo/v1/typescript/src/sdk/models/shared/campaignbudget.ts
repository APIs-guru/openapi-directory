import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateRange } from "./daterange";
import { PrismaConfig } from "./prismaconfig";

export enum CampaignBudgetBudgetUnitEnum {
    BudgetUnitUnspecified = "BUDGET_UNIT_UNSPECIFIED"
,    BudgetUnitCurrency = "BUDGET_UNIT_CURRENCY"
,    BudgetUnitImpressions = "BUDGET_UNIT_IMPRESSIONS"
}

export enum CampaignBudgetExternalBudgetSourceEnum {
    ExternalBudgetSourceUnspecified = "EXTERNAL_BUDGET_SOURCE_UNSPECIFIED"
,    ExternalBudgetSourceNone = "EXTERNAL_BUDGET_SOURCE_NONE"
,    ExternalBudgetSourceMediaOcean = "EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN"
}


// CampaignBudget
/** 
 * Settings that control how the campaign budget is allocated.
**/
export class CampaignBudget extends SpeakeasyBase {
  @Metadata({ data: "json, name=budgetAmountMicros" })
  budgetAmountMicros?: string;

  @Metadata({ data: "json, name=budgetId" })
  budgetId?: string;

  @Metadata({ data: "json, name=budgetUnit" })
  budgetUnit?: CampaignBudgetBudgetUnitEnum;

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=externalBudgetId" })
  externalBudgetId?: string;

  @Metadata({ data: "json, name=externalBudgetSource" })
  externalBudgetSource?: CampaignBudgetExternalBudgetSourceEnum;

  @Metadata({ data: "json, name=invoiceGroupingId" })
  invoiceGroupingId?: string;

  @Metadata({ data: "json, name=prismaConfig" })
  prismaConfig?: PrismaConfig;
}
