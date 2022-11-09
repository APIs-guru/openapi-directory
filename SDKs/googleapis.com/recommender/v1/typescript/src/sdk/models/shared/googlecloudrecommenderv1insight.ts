import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1InsightRecommendationReference } from "./googlecloudrecommenderv1insightrecommendationreference";
import { GoogleCloudRecommenderV1InsightStateInfo } from "./googlecloudrecommenderv1insightstateinfo";

export enum GoogleCloudRecommenderV1InsightCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED"
,    Cost = "COST"
,    Security = "SECURITY"
,    Performance = "PERFORMANCE"
,    Manageability = "MANAGEABILITY"
,    Sustainability = "SUSTAINABILITY"
,    Reliability = "RELIABILITY"
}

export enum GoogleCloudRecommenderV1InsightSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Low = "LOW"
,    Medium = "MEDIUM"
,    High = "HIGH"
,    Critical = "CRITICAL"
}


// GoogleCloudRecommenderV1Insight
/** 
 * An insight along with the information used to derive the insight. The insight may have associated recommendations as well.
**/
export class GoogleCloudRecommenderV1Insight extends SpeakeasyBase {
  @Metadata({ data: "json, name=associatedRecommendations", elemType: shared.GoogleCloudRecommenderV1InsightRecommendationReference })
  associatedRecommendations?: GoogleCloudRecommenderV1InsightRecommendationReference[];

  @Metadata({ data: "json, name=category" })
  category?: GoogleCloudRecommenderV1InsightCategoryEnum;

  @Metadata({ data: "json, name=content" })
  content?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=insightSubtype" })
  insightSubtype?: string;

  @Metadata({ data: "json, name=lastRefreshTime" })
  lastRefreshTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=observationPeriod" })
  observationPeriod?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: GoogleCloudRecommenderV1InsightSeverityEnum;

  @Metadata({ data: "json, name=stateInfo" })
  stateInfo?: GoogleCloudRecommenderV1InsightStateInfo;

  @Metadata({ data: "json, name=targetResources" })
  targetResources?: string[];
}
