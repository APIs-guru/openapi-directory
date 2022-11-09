import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommendationengineV1beta1FeatureMapStringList } from "./googlecloudrecommendationenginev1beta1featuremapstringlist";
import { GoogleCloudRecommendationengineV1beta1FeatureMapFloatList } from "./googlecloudrecommendationenginev1beta1featuremapfloatlist";


// GoogleCloudRecommendationengineV1beta1FeatureMap
/** 
 * FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
**/
export class GoogleCloudRecommendationengineV1beta1FeatureMap extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoricalFeatures", elemType: shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList })
  categoricalFeatures?: Map<string, GoogleCloudRecommendationengineV1beta1FeatureMapStringList>;

  @Metadata({ data: "json, name=numericalFeatures", elemType: shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList })
  numericalFeatures?: Map<string, GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>;
}
