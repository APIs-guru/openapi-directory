import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy } from "./googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy";
import { GoogleCloudRecommendationengineV1beta1ProductDetail } from "./googlecloudrecommendationenginev1beta1productdetail";
import { GoogleCloudRecommendationengineV1beta1PurchaseTransaction } from "./googlecloudrecommendationenginev1beta1purchasetransaction";



// GoogleCloudRecommendationengineV1beta1ProductEventDetail
/** 
 * ProductEventDetail captures user event information specific to retail products.
**/
export class GoogleCloudRecommendationengineV1beta1ProductEventDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cartId" })
  cartId?: string;

  @SpeakeasyMetadata({ data: "json, name=listId" })
  listId?: string;

  @SpeakeasyMetadata({ data: "json, name=pageCategories", elemType: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy })
  pageCategories?: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[];

  @SpeakeasyMetadata({ data: "json, name=productDetails", elemType: GoogleCloudRecommendationengineV1beta1ProductDetail })
  productDetails?: GoogleCloudRecommendationengineV1beta1ProductDetail[];

  @SpeakeasyMetadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRecommendationengineV1beta1PurchaseTransaction;

  @SpeakeasyMetadata({ data: "json, name=searchQuery" })
  searchQuery?: string;
}
