import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepricingRuleReportBuyboxWinningRuleStats
/** 
 * Stats specific to buybox winning rules for rule report.
**/
export class RepricingRuleReportBuyboxWinningRuleStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyboxWonProductCount" })
  buyboxWonProductCount?: number;
}
