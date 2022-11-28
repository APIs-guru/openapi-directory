import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1InsightRecommendationReference } from "./googlecloudrecommenderv1beta1insightrecommendationreference";
import { GoogleCloudRecommenderV1beta1InsightStateInfo } from "./googlecloudrecommenderv1beta1insightstateinfo";
export declare enum GoogleCloudRecommenderV1beta1InsightCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Cost = "COST",
    Security = "SECURITY",
    Performance = "PERFORMANCE",
    Manageability = "MANAGEABILITY",
    Sustainability = "SUSTAINABILITY",
    Reliability = "RELIABILITY"
}
export declare enum GoogleCloudRecommenderV1beta1InsightSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
/**
 * An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
**/
export declare class GoogleCloudRecommenderV1beta1Insight extends SpeakeasyBase {
    associatedRecommendations?: GoogleCloudRecommenderV1beta1InsightRecommendationReference[];
    category?: GoogleCloudRecommenderV1beta1InsightCategoryEnum;
    content?: Map<string, any>;
    description?: string;
    etag?: string;
    insightSubtype?: string;
    lastRefreshTime?: string;
    name?: string;
    observationPeriod?: string;
    severity?: GoogleCloudRecommenderV1beta1InsightSeverityEnum;
    stateInfo?: GoogleCloudRecommenderV1beta1InsightStateInfo;
    targetResources?: string[];
}
