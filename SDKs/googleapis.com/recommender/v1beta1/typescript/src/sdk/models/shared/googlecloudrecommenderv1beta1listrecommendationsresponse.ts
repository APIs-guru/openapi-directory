import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1Recommendation } from "./googlecloudrecommenderv1beta1recommendation";



// GoogleCloudRecommenderV1beta1ListRecommendationsResponse
/** 
 * Response to the `ListRecommendations` method.
**/
export class GoogleCloudRecommenderV1beta1ListRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendations", elemType: GoogleCloudRecommenderV1beta1Recommendation })
  recommendations?: GoogleCloudRecommenderV1beta1Recommendation[];
}
