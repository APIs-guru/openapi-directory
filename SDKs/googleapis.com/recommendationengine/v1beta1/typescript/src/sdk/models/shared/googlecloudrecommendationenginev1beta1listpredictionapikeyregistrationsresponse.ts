import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration } from "./googlecloudrecommendationenginev1beta1predictionapikeyregistration";


// GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse
/** 
 * Response message for the `ListPredictionApiKeyRegistrations`.
**/
export class GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=predictionApiKeyRegistrations", elemType: shared.GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration })
  predictionApiKeyRegistrations?: GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration[];
}
