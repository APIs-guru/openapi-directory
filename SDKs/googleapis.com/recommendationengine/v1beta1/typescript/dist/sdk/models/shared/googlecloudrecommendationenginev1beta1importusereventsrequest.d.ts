import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1ImportErrorsConfig } from "./googlecloudrecommendationenginev1beta1importerrorsconfig";
import { GoogleCloudRecommendationengineV1beta1InputConfig } from "./googlecloudrecommendationenginev1beta1inputconfig";
/**
 * Request message for the ImportUserEvents request.
**/
export declare class GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest extends SpeakeasyBase {
    errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;
    inputConfig?: GoogleCloudRecommendationengineV1beta1InputConfig;
    requestId?: string;
}
