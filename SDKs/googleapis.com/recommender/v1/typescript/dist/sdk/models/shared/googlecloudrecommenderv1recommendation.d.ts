import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Impact } from "./googlecloudrecommenderv1impact";
import { GoogleCloudRecommenderV1RecommendationInsightReference } from "./googlecloudrecommenderv1recommendationinsightreference";
import { GoogleCloudRecommenderV1RecommendationContent } from "./googlecloudrecommenderv1recommendationcontent";
import { GoogleCloudRecommenderV1RecommendationStateInfo } from "./googlecloudrecommenderv1recommendationstateinfo";
export declare enum GoogleCloudRecommenderV1RecommendationPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    P4 = "P4",
    P3 = "P3",
    P2 = "P2",
    P1 = "P1"
}
/**
 * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
**/
export declare class GoogleCloudRecommenderV1Recommendation extends SpeakeasyBase {
    additionalImpact?: GoogleCloudRecommenderV1Impact[];
    associatedInsights?: GoogleCloudRecommenderV1RecommendationInsightReference[];
    content?: GoogleCloudRecommenderV1RecommendationContent;
    description?: string;
    etag?: string;
    lastRefreshTime?: string;
    name?: string;
    primaryImpact?: GoogleCloudRecommenderV1Impact;
    priority?: GoogleCloudRecommenderV1RecommendationPriorityEnum;
    recommenderSubtype?: string;
    stateInfo?: GoogleCloudRecommenderV1RecommendationStateInfo;
    xorGroupId?: string;
}
