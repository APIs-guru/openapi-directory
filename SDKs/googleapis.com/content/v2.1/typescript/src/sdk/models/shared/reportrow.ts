import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BestSellers } from "./bestsellers";
import { Brand } from "./brand";
import { Metrics } from "./metrics";
import { PriceCompetitiveness } from "./pricecompetitiveness";
import { PriceInsights } from "./priceinsights";
import { ProductCluster } from "./productcluster";
import { ProductView } from "./productview";
import { Segments } from "./segments";



// ReportRow
/** 
 * Result row returned from the search query.
**/
export class ReportRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bestSellers" })
  bestSellers?: BestSellers;

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: Brand;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: Metrics;

  @SpeakeasyMetadata({ data: "json, name=priceCompetitiveness" })
  priceCompetitiveness?: PriceCompetitiveness;

  @SpeakeasyMetadata({ data: "json, name=priceInsights" })
  priceInsights?: PriceInsights;

  @SpeakeasyMetadata({ data: "json, name=productCluster" })
  productCluster?: ProductCluster;

  @SpeakeasyMetadata({ data: "json, name=productView" })
  productView?: ProductView;

  @SpeakeasyMetadata({ data: "json, name=segments" })
  segments?: Segments;
}
