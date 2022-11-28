import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItem } from "./googlecloudrecommendationenginev1beta1catalogitem";



// GoogleCloudRecommendationengineV1beta1CatalogInlineSource
/** 
 * The inline source for the input config for ImportCatalogItems method.
**/
export class GoogleCloudRecommendationengineV1beta1CatalogInlineSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogItems", elemType: GoogleCloudRecommendationengineV1beta1CatalogItem })
  catalogItems?: GoogleCloudRecommendationengineV1beta1CatalogItem[];
}
