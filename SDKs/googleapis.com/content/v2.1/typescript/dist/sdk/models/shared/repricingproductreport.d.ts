import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingProductReportBuyboxWinningProductStats } from "./repricingproductreportbuyboxwinningproductstats";
import { Date } from "./date";
import { PriceAmount } from "./priceamount";
import { InapplicabilityDetails } from "./inapplicabilitydetails";
export declare enum RepricingProductReportTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED",
    TypeStatsBased = "TYPE_STATS_BASED",
    TypeCogsBased = "TYPE_COGS_BASED",
    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED",
    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}
/**
 * Resource that represents a daily Repricing product report. Each report contains stats for a single type of Repricing rule for a single product on a given day. If there are multiple rules of the same type for the product on that day, the report lists all the rules by rule ids, combines the stats, and paginates the results by date. To retrieve the stats of a particular rule, provide the rule_id in the request.
**/
export declare class RepricingProductReport extends SpeakeasyBase {
    applicationCount?: string;
    buyboxWinningProductStats?: RepricingProductReportBuyboxWinningProductStats;
    date?: Date;
    highWatermark?: PriceAmount;
    inapplicabilityDetails?: InapplicabilityDetails[];
    lowWatermark?: PriceAmount;
    orderItemCount?: number;
    ruleIds?: string[];
    totalGmv?: PriceAmount;
    type?: RepricingProductReportTypeEnum;
}
