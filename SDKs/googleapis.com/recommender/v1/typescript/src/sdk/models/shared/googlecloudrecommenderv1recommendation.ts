import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1Impact } from "./googlecloudrecommenderv1impact";
import { GoogleCloudRecommenderV1RecommendationInsightReference } from "./googlecloudrecommenderv1recommendationinsightreference";
import { GoogleCloudRecommenderV1RecommendationContent } from "./googlecloudrecommenderv1recommendationcontent";
import { GoogleCloudRecommenderV1Impact } from "./googlecloudrecommenderv1impact";
import { GoogleCloudRecommenderV1RecommendationStateInfo } from "./googlecloudrecommenderv1recommendationstateinfo";

export enum GoogleCloudRecommenderV1RecommendationPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED"
,    P4 = "P4"
,    P3 = "P3"
,    P2 = "P2"
,    P1 = "P1"
}


// GoogleCloudRecommenderV1Recommendation
/** 
 * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
**/
export class GoogleCloudRecommenderV1Recommendation extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalImpact", elemType: shared.GoogleCloudRecommenderV1Impact })
  additionalImpact?: GoogleCloudRecommenderV1Impact[];

  @Metadata({ data: "json, name=associatedInsights", elemType: shared.GoogleCloudRecommenderV1RecommendationInsightReference })
  associatedInsights?: GoogleCloudRecommenderV1RecommendationInsightReference[];

  @Metadata({ data: "json, name=content" })
  content?: GoogleCloudRecommenderV1RecommendationContent;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=lastRefreshTime" })
  lastRefreshTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primaryImpact" })
  primaryImpact?: GoogleCloudRecommenderV1Impact;

  @Metadata({ data: "json, name=priority" })
  priority?: GoogleCloudRecommenderV1RecommendationPriorityEnum;

  @Metadata({ data: "json, name=recommenderSubtype" })
  recommenderSubtype?: string;

  @Metadata({ data: "json, name=stateInfo" })
  stateInfo?: GoogleCloudRecommenderV1RecommendationStateInfo;

  @Metadata({ data: "json, name=xorGroupId" })
  xorGroupId?: string;
}
