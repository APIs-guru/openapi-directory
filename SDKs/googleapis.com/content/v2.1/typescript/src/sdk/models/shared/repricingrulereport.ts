import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepricingRuleReportBuyboxWinningRuleStats } from "./repricingrulereportbuyboxwinningrulestats";
import { Date } from "./date";
import { InapplicabilityDetails } from "./inapplicabilitydetails";
import { PriceAmount } from "./priceamount";

export enum RepricingRuleReportTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED"
,    TypeStatsBased = "TYPE_STATS_BASED"
,    TypeCogsBased = "TYPE_COGS_BASED"
,    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED"
,    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}


// RepricingRuleReport
/** 
 * Resource that represents a daily Repricing rule report. Next ID: 11
**/
export class RepricingRuleReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyboxWinningRuleStats" })
  buyboxWinningRuleStats?: RepricingRuleReportBuyboxWinningRuleStats;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=impactedProducts" })
  impactedProducts?: string[];

  @Metadata({ data: "json, name=inapplicabilityDetails", elemType: shared.InapplicabilityDetails })
  inapplicabilityDetails?: InapplicabilityDetails[];

  @Metadata({ data: "json, name=inapplicableProducts" })
  inapplicableProducts?: string[];

  @Metadata({ data: "json, name=orderItemCount" })
  orderItemCount?: number;

  @Metadata({ data: "json, name=ruleId" })
  ruleId?: string;

  @Metadata({ data: "json, name=totalGmv" })
  totalGmv?: PriceAmount;

  @Metadata({ data: "json, name=type" })
  type?: RepricingRuleReportTypeEnum;
}
