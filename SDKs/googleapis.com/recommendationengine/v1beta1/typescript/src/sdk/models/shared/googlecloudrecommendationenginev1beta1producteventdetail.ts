import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy } from "./googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy";
import { GoogleCloudRecommendationengineV1beta1ProductDetail } from "./googlecloudrecommendationenginev1beta1productdetail";
import { GoogleCloudRecommendationengineV1beta1PurchaseTransaction } from "./googlecloudrecommendationenginev1beta1purchasetransaction";


// GoogleCloudRecommendationengineV1beta1ProductEventDetail
/** 
 * ProductEventDetail captures user event information specific to retail products.
**/
export class GoogleCloudRecommendationengineV1beta1ProductEventDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=cartId" })
  cartId?: string;

  @Metadata({ data: "json, name=listId" })
  listId?: string;

  @Metadata({ data: "json, name=pageCategories", elemType: shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy })
  pageCategories?: GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy[];

  @Metadata({ data: "json, name=productDetails", elemType: shared.GoogleCloudRecommendationengineV1beta1ProductDetail })
  productDetails?: GoogleCloudRecommendationengineV1beta1ProductDetail[];

  @Metadata({ data: "json, name=purchaseTransaction" })
  purchaseTransaction?: GoogleCloudRecommendationengineV1beta1PurchaseTransaction;

  @Metadata({ data: "json, name=searchQuery" })
  searchQuery?: string;
}
