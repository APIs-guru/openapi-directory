import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";



// GoogleCloudRetailV2alphaSearchResponseSearchResult
/** 
 * Represents the search results.
**/
export class GoogleCloudRetailV2alphaSearchResponseSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=matchingVariantCount" })
  matchingVariantCount?: number;

  @SpeakeasyMetadata({ data: "json, name=matchingVariantFields" })
  matchingVariantFields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=personalLabels" })
  personalLabels?: string[];

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2alphaProduct;

  @SpeakeasyMetadata({ data: "json, name=variantRollupValues" })
  variantRollupValues?: Map<string, any>;
}
