import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1FeatureMapStringList } from "./googlecloudrecommendationenginev1beta1featuremapstringlist";
import { GoogleCloudRecommendationengineV1beta1FeatureMapFloatList } from "./googlecloudrecommendationenginev1beta1featuremapfloatlist";
/**
 * FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
**/
export declare class GoogleCloudRecommendationengineV1beta1FeatureMap extends SpeakeasyBase {
    categoricalFeatures?: Map<string, GoogleCloudRecommendationengineV1beta1FeatureMapStringList>;
    numericalFeatures?: Map<string, GoogleCloudRecommendationengineV1beta1FeatureMapFloatList>;
}
