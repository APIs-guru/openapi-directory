import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommendationengineV1beta1CatalogItem } from "./googlecloudrecommendationenginev1beta1catalogitem";


// GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse
/** 
 * Response message for ListCatalogItems method.
**/
export class GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogItems", elemType: shared.GoogleCloudRecommendationengineV1beta1CatalogItem })
  catalogItems?: GoogleCloudRecommendationengineV1beta1CatalogItem[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
