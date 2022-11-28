import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1ImportErrorsConfig } from "./googlecloudrecommendationenginev1beta1importerrorsconfig";
import { GoogleCloudRecommendationengineV1beta1InputConfig } from "./googlecloudrecommendationenginev1beta1inputconfig";



// GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest
/** 
 * Request message for the ImportUserEvents request.
**/
export class GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRecommendationengineV1beta1InputConfig;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
