import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";


// GoogleCloudRetailV2betaSearchResponseSearchResult
/** 
 * Represents the search results.
**/
export class GoogleCloudRetailV2betaSearchResponseSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=matchingVariantCount" })
  matchingVariantCount?: number;

  @Metadata({ data: "json, name=matchingVariantFields" })
  matchingVariantFields?: Map<string, string>;

  @Metadata({ data: "json, name=personalLabels" })
  personalLabels?: string[];

  @Metadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2betaProduct;

  @Metadata({ data: "json, name=variantRollupValues" })
  variantRollupValues?: Map<string, any>;
}
