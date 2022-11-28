import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";



// GoogleCloudRecommendationengineV1beta1EventDetail
/** 
 * User event details shared by all recommendation types.
**/
export class GoogleCloudRecommendationengineV1beta1EventDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventAttributes" })
  eventAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;

  @SpeakeasyMetadata({ data: "json, name=experimentIds" })
  experimentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=pageViewId" })
  pageViewId?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationToken" })
  recommendationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
