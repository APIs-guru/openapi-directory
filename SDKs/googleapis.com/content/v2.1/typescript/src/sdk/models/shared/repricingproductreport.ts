import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepricingProductReportBuyboxWinningProductStats } from "./repricingproductreportbuyboxwinningproductstats";
import { Date } from "./date";
import { PriceAmount } from "./priceamount";
import { InapplicabilityDetails } from "./inapplicabilitydetails";


export enum RepricingProductReportTypeEnum {
    RepricingRuleTypeUnspecified = "REPRICING_RULE_TYPE_UNSPECIFIED",
    TypeStatsBased = "TYPE_STATS_BASED",
    TypeCogsBased = "TYPE_COGS_BASED",
    TypeSalesVolumeBased = "TYPE_SALES_VOLUME_BASED",
    TypeCompetitivePrice = "TYPE_COMPETITIVE_PRICE"
}


// RepricingProductReport
/** 
 * Resource that represents a daily Repricing product report. Each report contains stats for a single type of Repricing rule for a single product on a given day. If there are multiple rules of the same type for the product on that day, the report lists all the rules by rule ids, combines the stats, and paginates the results by date. To retrieve the stats of a particular rule, provide the rule_id in the request.
**/
export class RepricingProductReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationCount" })
  applicationCount?: string;

  @SpeakeasyMetadata({ data: "json, name=buyboxWinningProductStats" })
  buyboxWinningProductStats?: RepricingProductReportBuyboxWinningProductStats;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=highWatermark" })
  highWatermark?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=inapplicabilityDetails", elemType: InapplicabilityDetails })
  inapplicabilityDetails?: InapplicabilityDetails[];

  @SpeakeasyMetadata({ data: "json, name=lowWatermark" })
  lowWatermark?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=orderItemCount" })
  orderItemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ruleIds" })
  ruleIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=totalGmv" })
  totalGmv?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RepricingProductReportTypeEnum;
}
