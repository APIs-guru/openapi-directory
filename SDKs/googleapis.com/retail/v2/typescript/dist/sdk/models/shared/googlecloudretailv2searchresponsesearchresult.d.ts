import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";
/**
 * Represents the search results.
**/
export declare class GoogleCloudRetailV2SearchResponseSearchResult extends SpeakeasyBase {
    id?: string;
    matchingVariantCount?: number;
    matchingVariantFields?: Map<string, string>;
    personalLabels?: string[];
    product?: GoogleCloudRetailV2Product;
    variantRollupValues?: Map<string, any>;
}
