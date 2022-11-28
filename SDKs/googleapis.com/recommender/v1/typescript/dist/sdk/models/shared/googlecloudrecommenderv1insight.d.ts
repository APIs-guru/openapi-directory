import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1InsightRecommendationReference } from "./googlecloudrecommenderv1insightrecommendationreference";
import { GoogleCloudRecommenderV1InsightStateInfo } from "./googlecloudrecommenderv1insightstateinfo";
export declare enum GoogleCloudRecommenderV1InsightCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Cost = "COST",
    Security = "SECURITY",
    Performance = "PERFORMANCE",
    Manageability = "MANAGEABILITY",
    Sustainability = "SUSTAINABILITY",
    Reliability = "RELIABILITY"
}
export declare enum GoogleCloudRecommenderV1InsightSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
/**
 * An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
**/
export declare class GoogleCloudRecommenderV1Insight extends SpeakeasyBase {
    associatedRecommendations?: GoogleCloudRecommenderV1InsightRecommendationReference[];
    category?: GoogleCloudRecommenderV1InsightCategoryEnum;
    content?: Map<string, any>;
    description?: string;
    etag?: string;
    insightSubtype?: string;
    lastRefreshTime?: string;
    name?: string;
    observationPeriod?: string;
    severity?: GoogleCloudRecommenderV1InsightSeverityEnum;
    stateInfo?: GoogleCloudRecommenderV1InsightStateInfo;
    targetResources?: string[];
}
