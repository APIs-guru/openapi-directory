import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Impact } from "./googlecloudrecommenderv1impact";
import { GoogleCloudRecommenderV1RecommendationInsightReference } from "./googlecloudrecommenderv1recommendationinsightreference";
import { GoogleCloudRecommenderV1RecommendationContent } from "./googlecloudrecommenderv1recommendationcontent";
import { GoogleCloudRecommenderV1RecommendationStateInfo } from "./googlecloudrecommenderv1recommendationstateinfo";


export enum GoogleCloudRecommenderV1RecommendationPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    P4 = "P4",
    P3 = "P3",
    P2 = "P2",
    P1 = "P1"
}


// GoogleCloudRecommenderV1Recommendation
/** 
 * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
**/
export class GoogleCloudRecommenderV1Recommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalImpact", elemType: GoogleCloudRecommenderV1Impact })
  additionalImpact?: GoogleCloudRecommenderV1Impact[];

  @SpeakeasyMetadata({ data: "json, name=associatedInsights", elemType: GoogleCloudRecommenderV1RecommendationInsightReference })
  associatedInsights?: GoogleCloudRecommenderV1RecommendationInsightReference[];

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: GoogleCloudRecommenderV1RecommendationContent;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRefreshTime" })
  lastRefreshTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryImpact" })
  primaryImpact?: GoogleCloudRecommenderV1Impact;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: GoogleCloudRecommenderV1RecommendationPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=recommenderSubtype" })
  recommenderSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=stateInfo" })
  stateInfo?: GoogleCloudRecommenderV1RecommendationStateInfo;

  @SpeakeasyMetadata({ data: "json, name=xorGroupId" })
  xorGroupId?: string;
}
