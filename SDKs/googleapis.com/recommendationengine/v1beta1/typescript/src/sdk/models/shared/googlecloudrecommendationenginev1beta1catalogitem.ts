import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy } from "./googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItem } from "./googlecloudrecommendationenginev1beta1productcatalogitem";


// GoogleCloudRecommendationengineV1beta1CatalogItem
/** 
 * CatalogItem captures all metadata information of items to be recommended.
**/
export class GoogleCloudRecommendationengineV1beta1CatalogItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryHierarchies", elemType: shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy })
  categoryHierarchies?: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=itemAttributes" })
  itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;

  @Metadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=productMetadata" })
  productMetadata?: GoogleCloudRecommendationengineV1beta1ProductCatalogItem;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
