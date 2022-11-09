import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRecommendationengineV1beta1ImportErrorsConfig } from "./googlecloudrecommendationenginev1beta1importerrorsconfig";
import { GoogleCloudRecommendationengineV1beta1InputConfig } from "./googlecloudrecommendationenginev1beta1inputconfig";


// GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest
/** 
 * Request message for the ImportUserEvents request.
**/
export class GoogleCloudRecommendationengineV1beta1ImportUserEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRecommendationengineV1beta1ImportErrorsConfig;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRecommendationengineV1beta1InputConfig;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
