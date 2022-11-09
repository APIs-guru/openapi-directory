import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";


// GoogleCloudRecommendationengineV1beta1EventDetail
/** 
 * User event details shared by all recommendation types.
**/
export class GoogleCloudRecommendationengineV1beta1EventDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventAttributes" })
  eventAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;

  @Metadata({ data: "json, name=experimentIds" })
  experimentIds?: string[];

  @Metadata({ data: "json, name=pageViewId" })
  pageViewId?: string;

  @Metadata({ data: "json, name=recommendationToken" })
  recommendationToken?: string;

  @Metadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
