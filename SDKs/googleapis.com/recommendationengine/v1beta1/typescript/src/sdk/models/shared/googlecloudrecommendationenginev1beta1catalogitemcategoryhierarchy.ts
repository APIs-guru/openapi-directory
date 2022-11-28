import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy
/** 
 * Category represents catalog item category hierarchy.
**/
export class GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];
}
