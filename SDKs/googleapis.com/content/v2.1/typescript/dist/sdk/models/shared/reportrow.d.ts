import { SpeakeasyBase } from "../../../internal/utils";
import { BestSellers } from "./bestsellers";
import { Brand } from "./brand";
import { Metrics } from "./metrics";
import { PriceCompetitiveness } from "./pricecompetitiveness";
import { PriceInsights } from "./priceinsights";
import { ProductCluster } from "./productcluster";
import { ProductView } from "./productview";
import { Segments } from "./segments";
/**
 * Result row returned from the search query.
**/
export declare class ReportRow extends SpeakeasyBase {
    bestSellers?: BestSellers;
    brand?: Brand;
    metrics?: Metrics;
    priceCompetitiveness?: PriceCompetitiveness;
    priceInsights?: PriceInsights;
    productCluster?: ProductCluster;
    productView?: ProductView;
    segments?: Segments;
}
