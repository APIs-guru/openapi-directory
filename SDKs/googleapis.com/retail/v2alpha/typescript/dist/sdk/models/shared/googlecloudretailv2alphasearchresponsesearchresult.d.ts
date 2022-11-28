import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";
/**
 * Represents the search results.
**/
export declare class GoogleCloudRetailV2alphaSearchResponseSearchResult extends SpeakeasyBase {
    id?: string;
    matchingVariantCount?: number;
    matchingVariantFields?: Map<string, string>;
    personalLabels?: string[];
    product?: GoogleCloudRetailV2alphaProduct;
    variantRollupValues?: Map<string, any>;
}
