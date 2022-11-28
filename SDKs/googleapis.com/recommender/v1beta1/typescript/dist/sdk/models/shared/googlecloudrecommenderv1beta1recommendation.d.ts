import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1Impact } from "./googlecloudrecommenderv1beta1impact";
import { GoogleCloudRecommenderV1beta1RecommendationInsightReference } from "./googlecloudrecommenderv1beta1recommendationinsightreference";
import { GoogleCloudRecommenderV1beta1RecommendationContent } from "./googlecloudrecommenderv1beta1recommendationcontent";
import { GoogleCloudRecommenderV1beta1RecommendationStateInfo } from "./googlecloudrecommenderv1beta1recommendationstateinfo";
export declare enum GoogleCloudRecommenderV1beta1RecommendationPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    P4 = "P4",
    P3 = "P3",
    P2 = "P2",
    P1 = "P1"
}
/**
 * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
**/
export declare class GoogleCloudRecommenderV1beta1Recommendation extends SpeakeasyBase {
    additionalImpact?: GoogleCloudRecommenderV1beta1Impact[];
    associatedInsights?: GoogleCloudRecommenderV1beta1RecommendationInsightReference[];
    content?: GoogleCloudRecommenderV1beta1RecommendationContent;
    description?: string;
    etag?: string;
    lastRefreshTime?: string;
    name?: string;
    primaryImpact?: GoogleCloudRecommenderV1beta1Impact;
    priority?: GoogleCloudRecommenderV1beta1RecommendationPriorityEnum;
    recommenderSubtype?: string;
    stateInfo?: GoogleCloudRecommenderV1beta1RecommendationStateInfo;
    xorGroupId?: string;
}
