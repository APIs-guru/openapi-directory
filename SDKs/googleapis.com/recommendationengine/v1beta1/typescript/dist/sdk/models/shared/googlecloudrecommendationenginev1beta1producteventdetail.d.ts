import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy } from "./googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy";
import { GoogleCloudRecommendationengineV1beta1ProductDetail } from "./googlecloudrecommendationenginev1beta1productdetail";
import { GoogleCloudRecommendationengineV1beta1PurchaseTransaction } from "./googlecloudrecommendationenginev1beta1purchasetransaction";
/**
 * ProductEventDetail captures user event information specific to retail products.
**/
export declare class GoogleCloudRecommendationengineV1beta1ProductEventDetail extends SpeakeasyBase {
    cartId?: string;
    listId?: string;
    pageCategories?: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[];
    productDetails?: GoogleCloudRecommendationengineV1beta1ProductDetail[];
    purchaseTransaction?: GoogleCloudRecommendationengineV1beta1PurchaseTransaction;
    searchQuery?: string;
}
