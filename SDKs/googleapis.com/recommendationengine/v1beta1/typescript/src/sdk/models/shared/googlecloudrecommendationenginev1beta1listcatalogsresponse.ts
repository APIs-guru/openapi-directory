import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1Catalog } from "./googlecloudrecommendationenginev1beta1catalog";



// GoogleCloudRecommendationengineV1beta1ListCatalogsResponse
/** 
 * Response for ListCatalogs method.
**/
export class GoogleCloudRecommendationengineV1beta1ListCatalogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogs", elemType: GoogleCloudRecommendationengineV1beta1Catalog })
  catalogs?: GoogleCloudRecommendationengineV1beta1Catalog[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
