import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration } from "./googlecloudrecommendationenginev1beta1predictionapikeyregistration";



// GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest
/** 
 * Request message for the `CreatePredictionApiKeyRegistration` method.
**/
export class GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=predictionApiKeyRegistration" })
  predictionApiKeyRegistration?: GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration;
}
