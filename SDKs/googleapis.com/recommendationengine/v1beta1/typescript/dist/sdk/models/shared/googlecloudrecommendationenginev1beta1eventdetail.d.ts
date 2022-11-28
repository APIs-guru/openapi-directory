import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";
/**
 * User event details shared by all recommendation types.
**/
export declare class GoogleCloudRecommendationengineV1beta1EventDetail extends SpeakeasyBase {
    eventAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;
    experimentIds?: string[];
    pageViewId?: string;
    recommendationToken?: string;
    referrerUri?: string;
    uri?: string;
}
