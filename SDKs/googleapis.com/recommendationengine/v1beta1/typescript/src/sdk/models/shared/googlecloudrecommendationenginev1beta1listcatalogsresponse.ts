import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommendationengineV1beta1Catalog } from "./googlecloudrecommendationenginev1beta1catalog";


// GoogleCloudRecommendationengineV1beta1ListCatalogsResponse
/** 
 * Response for ListCatalogs method.
**/
export class GoogleCloudRecommendationengineV1beta1ListCatalogsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalogs", elemType: shared.GoogleCloudRecommendationengineV1beta1Catalog })
  catalogs?: GoogleCloudRecommendationengineV1beta1Catalog[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
