import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1InsightRecommendationReference } from "./googlecloudrecommenderv1insightrecommendationreference";
import { GoogleCloudRecommenderV1InsightStateInfo } from "./googlecloudrecommenderv1insightstateinfo";


export enum GoogleCloudRecommenderV1InsightCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    Cost = "COST",
    Security = "SECURITY",
    Performance = "PERFORMANCE",
    Manageability = "MANAGEABILITY",
    Sustainability = "SUSTAINABILITY",
    Reliability = "RELIABILITY"
}

export enum GoogleCloudRecommenderV1InsightSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}


// GoogleCloudRecommenderV1Insight
/** 
 * An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
**/
export class GoogleCloudRecommenderV1Insight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associatedRecommendations", elemType: GoogleCloudRecommenderV1InsightRecommendationReference })
  associatedRecommendations?: GoogleCloudRecommenderV1InsightRecommendationReference[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: GoogleCloudRecommenderV1InsightCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=insightSubtype" })
  insightSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRefreshTime" })
  lastRefreshTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=observationPeriod" })
  observationPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: GoogleCloudRecommenderV1InsightSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=stateInfo" })
  stateInfo?: GoogleCloudRecommenderV1InsightStateInfo;

  @SpeakeasyMetadata({ data: "json, name=targetResources" })
  targetResources?: string[];
}
