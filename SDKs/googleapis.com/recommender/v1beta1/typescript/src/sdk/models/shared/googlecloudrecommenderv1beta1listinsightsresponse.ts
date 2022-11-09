import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1beta1Insight } from "./googlecloudrecommenderv1beta1insight";


// GoogleCloudRecommenderV1beta1ListInsightsResponse
/** 
 * Response to the `ListInsights` method.
**/
export class GoogleCloudRecommenderV1beta1ListInsightsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=insights", elemType: shared.GoogleCloudRecommenderV1beta1Insight })
  insights?: GoogleCloudRecommenderV1beta1Insight[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
