import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1Impact } from "./googlecloudrecommenderv1beta1impact";
import { GoogleCloudRecommenderV1beta1RecommendationInsightReference } from "./googlecloudrecommenderv1beta1recommendationinsightreference";
import { GoogleCloudRecommenderV1beta1RecommendationContent } from "./googlecloudrecommenderv1beta1recommendationcontent";
import { GoogleCloudRecommenderV1beta1RecommendationStateInfo } from "./googlecloudrecommenderv1beta1recommendationstateinfo";


export enum GoogleCloudRecommenderV1beta1RecommendationPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    P4 = "P4",
    P3 = "P3",
    P2 = "P2",
    P1 = "P1"
}


// GoogleCloudRecommenderV1beta1Recommendation
/** 
 * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
**/
export class GoogleCloudRecommenderV1beta1Recommendation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalImpact", elemType: GoogleCloudRecommenderV1beta1Impact })
  additionalImpact?: GoogleCloudRecommenderV1beta1Impact[];

  @SpeakeasyMetadata({ data: "json, name=associatedInsights", elemType: GoogleCloudRecommenderV1beta1RecommendationInsightReference })
  associatedInsights?: GoogleCloudRecommenderV1beta1RecommendationInsightReference[];

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: GoogleCloudRecommenderV1beta1RecommendationContent;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=lastRefreshTime" })
  lastRefreshTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryImpact" })
  primaryImpact?: GoogleCloudRecommenderV1beta1Impact;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: GoogleCloudRecommenderV1beta1RecommendationPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=recommenderSubtype" })
  recommenderSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=stateInfo" })
  stateInfo?: GoogleCloudRecommenderV1beta1RecommendationStateInfo;

  @SpeakeasyMetadata({ data: "json, name=xorGroupId" })
  xorGroupId?: string;
}
