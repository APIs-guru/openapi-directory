import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1Recommendation } from "./googlecloudrecommenderv1recommendation";


// GoogleCloudRecommenderV1ListRecommendationsResponse
/** 
 * Response to the `ListRecommendations` method.
**/
export class GoogleCloudRecommenderV1ListRecommendationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=recommendations", elemType: shared.GoogleCloudRecommenderV1Recommendation })
  recommendations?: GoogleCloudRecommenderV1Recommendation[];
}
