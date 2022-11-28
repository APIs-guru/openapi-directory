import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Insight } from "./googlecloudrecommenderv1insight";



// GoogleCloudRecommenderV1ListInsightsResponse
/** 
 * Response to the `ListInsights` method.
**/
export class GoogleCloudRecommenderV1ListInsightsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insights", elemType: GoogleCloudRecommenderV1Insight })
  insights?: GoogleCloudRecommenderV1Insight[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
