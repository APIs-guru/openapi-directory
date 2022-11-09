import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration } from "./googlecloudrecommendationenginev1beta1predictionapikeyregistration";


// GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest
/** 
 * Request message for the `CreatePredictionApiKeyRegistration` method.
**/
export class GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=predictionApiKeyRegistration" })
  predictionApiKeyRegistration?: GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration;
}
