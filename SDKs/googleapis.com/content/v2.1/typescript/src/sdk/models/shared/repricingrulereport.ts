import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleReportBuyboxWinningRuleStats } from "./repricingrulereportbuyboxwinningrulestats";
import { Date } from "./date";
import { InapplicabilityDetails } from "./inapplicabilitydetails";
import { PriceAmount } from "./priceamount";


export enum RepricingRuleReportTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED",
    TypeStatsBased = "TYPE_STATS_BASED",
    TypeCogsBased = "TYPE_COGS_BASED",
    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED",
    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}


// RepricingRuleReport
/** 
 * Resource that represents a daily Repricing rule report. Next ID: 11
**/
export class RepricingRuleReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyboxWinningRuleStats" })
  buyboxWinningRuleStats?: RepricingRuleReportBuyboxWinningRuleStats;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=impactedProducts" })
  impactedProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=inapplicabilityDetails", elemType: InapplicabilityDetails })
  inapplicabilityDetails?: InapplicabilityDetails[];

  @SpeakeasyMetadata({ data: "json, name=inapplicableProducts" })
  inapplicableProducts?: string[];

  @SpeakeasyMetadata({ data: "json, name=orderItemCount" })
  orderItemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ruleId" })
  ruleId?: string;

  @SpeakeasyMetadata({ data: "json, name=totalGmv" })
  totalGmv?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RepricingRuleReportTypeEnum;
}
