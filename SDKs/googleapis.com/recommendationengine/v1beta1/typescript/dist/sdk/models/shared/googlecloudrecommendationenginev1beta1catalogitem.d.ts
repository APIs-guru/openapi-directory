import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy } from "./googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItem } from "./googlecloudrecommendationenginev1beta1productcatalogitem";
/**
 * CatalogItem captures all metadata information of items to be recommended.
**/
export declare class GoogleCloudRecommendationengineV1beta1CatalogItem extends SpeakeasyBase {
    categoryHierarchies?: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[];
    description?: string;
    id?: string;
    itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;
    itemGroupId?: string;
    languageCode?: string;
    productMetadata?: GoogleCloudRecommendationengineV1beta1ProductCatalogItem;
    tags?: string[];
    title?: string;
}
