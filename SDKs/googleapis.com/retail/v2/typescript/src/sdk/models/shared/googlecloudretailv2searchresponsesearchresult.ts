import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";


// GoogleCloudRetailV2SearchResponseSearchResult
/** 
 * Represents the search results.
**/
export class GoogleCloudRetailV2SearchResponseSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=matchingVariantCount" })
  matchingVariantCount?: number;

  @Metadata({ data: "json, name=matchingVariantFields" })
  matchingVariantFields?: Map<string, string>;

  @Metadata({ data: "json, name=personalLabels" })
  personalLabels?: string[];

  @Metadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2Product;

  @Metadata({ data: "json, name=variantRollupValues" })
  variantRollupValues?: Map<string, any>;
}
