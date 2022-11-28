import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleReportBuyboxWinningRuleStats } from "./repricingrulereportbuyboxwinningrulestats";
import { Date } from "./date";
import { InapplicabilityDetails } from "./inapplicabilitydetails";
import { PriceAmount } from "./priceamount";
export declare enum RepricingRuleReportTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED",
    TypeStatsBased = "TYPE_STATS_BASED",
    TypeCogsBased = "TYPE_COGS_BASED",
    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED",
    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}
/**
 * Resource that represents a daily Repricing rule report. Next ID: 11
**/
export declare class RepricingRuleReport extends SpeakeasyBase {
    buyboxWinningRuleStats?: RepricingRuleReportBuyboxWinningRuleStats;
    date?: Date;
    impactedProducts?: string[];
    inapplicabilityDetails?: InapplicabilityDetails[];
    inapplicableProducts?: string[];
    orderItemCount?: number;
    ruleId?: string;
    totalGmv?: PriceAmount;
    type?: RepricingRuleReportTypeEnum;
}
