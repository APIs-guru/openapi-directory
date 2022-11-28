import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Insight } from "./googlecloudrecommenderv1insight";
/**
 * Response to the `ListInsights` method.
**/
export declare class GoogleCloudRecommenderV1ListInsightsResponse extends SpeakeasyBase {
    insights?: GoogleCloudRecommenderV1Insight[];
    nextPageToken?: string;
}
