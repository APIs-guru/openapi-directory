import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration } from "./googlecloudrecommendationenginev1beta1predictionapikeyregistration";
/**
 * Response message for the `ListPredictionApiKeyRegistrations`.
**/
export declare class GoogleCloudRecommendationengineV1beta1ListPredictionApiKeyRegistrationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    predictionApiKeyRegistrations?: GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration[];
}
