import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommendationengineV1beta1CatalogItem } from "./googlecloudrecommendationenginev1beta1catalogitem";


// GoogleCloudRecommendationengineV1beta1CatalogInlineSource
/** 
 * The inline source for the input config for ImportCatalogItems method.
**/
export class GoogleCloudRecommendationengineV1beta1CatalogInlineSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogItems", elemType: shared.GoogleCloudRecommendationengineV1beta1CatalogItem })
  catalogItems?: GoogleCloudRecommendationengineV1beta1CatalogItem[];
}
