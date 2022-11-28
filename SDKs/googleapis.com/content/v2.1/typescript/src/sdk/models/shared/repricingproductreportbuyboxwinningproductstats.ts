import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepricingProductReportBuyboxWinningProductStats
/** 
 * Stats specific to buybox winning rules for product report.
**/
export class RepricingProductReportBuyboxWinningProductStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyboxWinsCount" })
  buyboxWinsCount?: number;
}
