import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { PrismaConfig } from "./prismaconfig";


export enum CampaignBudgetBudgetUnitEnum {
    BudgetUnitUnspecified = "BUDGET_UNIT_UNSPECIFIED",
    BudgetUnitCurrency = "BUDGET_UNIT_CURRENCY",
    BudgetUnitImpressions = "BUDGET_UNIT_IMPRESSIONS"
}

export enum CampaignBudgetExternalBudgetSourceEnum {
    ExternalBudgetSourceUnspecified = "EXTERNAL_BUDGET_SOURCE_UNSPECIFIED",
    ExternalBudgetSourceNone = "EXTERNAL_BUDGET_SOURCE_NONE",
    ExternalBudgetSourceMediaOcean = "EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN"
}


// CampaignBudget
/** 
 * Settings that control how the campaign budget is allocated.
**/
export class CampaignBudget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budgetAmountMicros" })
  budgetAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=budgetId" })
  budgetId?: string;

  @SpeakeasyMetadata({ data: "json, name=budgetUnit" })
  budgetUnit?: CampaignBudgetBudgetUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=externalBudgetId" })
  externalBudgetId?: string;

  @SpeakeasyMetadata({ data: "json, name=externalBudgetSource" })
  externalBudgetSource?: CampaignBudgetExternalBudgetSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=invoiceGroupingId" })
  invoiceGroupingId?: string;

  @SpeakeasyMetadata({ data: "json, name=prismaConfig" })
  prismaConfig?: PrismaConfig;
}
