import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Recommendation } from "./googlecloudrecommenderv1recommendation";



// GoogleCloudRecommenderV1ListRecommendationsResponse
/** 
 * Response to the `ListRecommendations` method.
**/
export class GoogleCloudRecommenderV1ListRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendations", elemType: GoogleCloudRecommenderV1Recommendation })
  recommendations?: GoogleCloudRecommenderV1Recommendation[];
}
