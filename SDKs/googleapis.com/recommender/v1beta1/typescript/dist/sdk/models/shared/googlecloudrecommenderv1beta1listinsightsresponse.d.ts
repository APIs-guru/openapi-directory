import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1Insight } from "./googlecloudrecommenderv1beta1insight";
/**
 * Response to the `ListInsights` method.
**/
export declare class GoogleCloudRecommenderV1beta1ListInsightsResponse extends SpeakeasyBase {
    insights?: GoogleCloudRecommenderV1beta1Insight[];
    nextPageToken?: string;
}
