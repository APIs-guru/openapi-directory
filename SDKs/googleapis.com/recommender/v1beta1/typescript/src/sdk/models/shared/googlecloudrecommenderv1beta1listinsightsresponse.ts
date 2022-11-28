import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1Insight } from "./googlecloudrecommenderv1beta1insight";



// GoogleCloudRecommenderV1beta1ListInsightsResponse
/** 
 * Response to the `ListInsights` method.
**/
export class GoogleCloudRecommenderV1beta1ListInsightsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insights", elemType: GoogleCloudRecommenderV1beta1Insight })
  insights?: GoogleCloudRecommenderV1beta1Insight[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
