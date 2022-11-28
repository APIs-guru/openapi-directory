import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy } from "./googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItem } from "./googlecloudrecommendationenginev1beta1productcatalogitem";



// GoogleCloudRecommendationengineV1beta1CatalogItem
/** 
 * CatalogItem captures all metadata information of items to be recommended.
**/
export class GoogleCloudRecommendationengineV1beta1CatalogItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryHierarchies", elemType: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy })
  categoryHierarchies?: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemAttributes" })
  itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;

  @SpeakeasyMetadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=productMetadata" })
  productMetadata?: GoogleCloudRecommendationengineV1beta1ProductCatalogItem;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
