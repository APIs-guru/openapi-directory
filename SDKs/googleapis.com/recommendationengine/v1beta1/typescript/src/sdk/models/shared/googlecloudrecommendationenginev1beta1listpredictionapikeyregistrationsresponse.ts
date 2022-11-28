import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration } from "./googlecloudrecommendationenginev1beta1predictionapikeyregistration";



// GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse
/** 
 * Response message for the `ListPredictionApiKeyRegistrations`.
**/
export class GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=predictionApiKeyRegistrations", elemType: GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration })
  predictionApiKeyRegistrations?: GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration[];
}
