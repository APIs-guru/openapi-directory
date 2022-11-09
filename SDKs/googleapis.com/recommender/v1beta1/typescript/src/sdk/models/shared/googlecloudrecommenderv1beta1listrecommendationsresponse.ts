import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1beta1Recommendation } from "./googlecloudrecommenderv1beta1recommendation";


// GoogleCloudRecommenderV1beta1ListRecommendationsResponse
/** 
 * Response to the `ListRecommendations` method.
**/
export class GoogleCloudRecommenderV1beta1ListRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=recommendations", elemType: shared.GoogleCloudRecommenderV1beta1Recommendation })
  recommendations?: GoogleCloudRecommenderV1beta1Recommendation[];
}
