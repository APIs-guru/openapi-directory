import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItem } from "./googlecloudrecommendationenginev1beta1catalogitem";



// GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse
/** 
 * Response message for ListCatalogItems method.
**/
export class GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogItems", elemType: GoogleCloudRecommendationengineV1beta1CatalogItem })
  catalogItems?: GoogleCloudRecommendationengineV1beta1CatalogItem[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
