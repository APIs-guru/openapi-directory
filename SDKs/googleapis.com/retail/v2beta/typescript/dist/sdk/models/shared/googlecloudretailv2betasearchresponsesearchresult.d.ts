import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";
/**
 * Represents the search results.
**/
export declare class GoogleCloudRetailV2betaSearchResponseSearchResult extends SpeakeasyBase {
    id?: string;
    matchingVariantCount?: number;
    matchingVariantFields?: Map<string, string>;
    personalLabels?: string[];
    product?: GoogleCloudRetailV2betaProduct;
    variantRollupValues?: Map<string, any>;
}
