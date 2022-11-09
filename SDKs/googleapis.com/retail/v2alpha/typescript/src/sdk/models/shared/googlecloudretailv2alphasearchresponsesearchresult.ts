import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";


// GoogleCloudRetailV2alphaSearchResponseSearchResult
/** 
 * Represents the search results.
**/
export class GoogleCloudRetailV2alphaSearchResponseSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=matchingVariantCount" })
  matchingVariantCount?: number;

  @Metadata({ data: "json, name=matchingVariantFields" })
  matchingVariantFields?: Map<string, string>;

  @Metadata({ data: "json, name=personalLabels" })
  personalLabels?: string[];

  @Metadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2alphaProduct;

  @Metadata({ data: "json, name=variantRollupValues" })
  variantRollupValues?: Map<string, any>;
}
