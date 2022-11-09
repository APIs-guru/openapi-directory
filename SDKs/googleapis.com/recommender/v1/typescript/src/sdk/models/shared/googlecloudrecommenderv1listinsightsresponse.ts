import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1Insight } from "./googlecloudrecommenderv1insight";


// GoogleCloudRecommenderV1ListInsightsResponse
/** 
 * Response to the `ListInsights` method.
**/
export class GoogleCloudRecommenderV1ListInsightsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=insights", elemType: shared.GoogleCloudRecommenderV1Insight })
  insights?: GoogleCloudRecommenderV1Insight[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
