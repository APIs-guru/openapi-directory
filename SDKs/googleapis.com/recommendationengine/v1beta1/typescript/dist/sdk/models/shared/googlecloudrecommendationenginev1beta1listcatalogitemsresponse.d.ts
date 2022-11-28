import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1CatalogItem } from "./googlecloudrecommendationenginev1beta1catalogitem";
/**
 * Response message for ListCatalogItems method.
**/
export declare class GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse extends SpeakeasyBase {
    catalogItems?: GoogleCloudRecommendationengineV1beta1CatalogItem[];
    nextPageToken?: string;
}
