import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1Catalog } from "./googlecloudrecommendationenginev1beta1catalog";
/**
 * Response for ListCatalogs method.
**/
export declare class GoogleCloudRecommendationengineV1beta1ListCatalogsResponse extends SpeakeasyBase {
    catalogs?: GoogleCloudRecommendationengineV1beta1Catalog[];
    nextPageToken?: string;
}
