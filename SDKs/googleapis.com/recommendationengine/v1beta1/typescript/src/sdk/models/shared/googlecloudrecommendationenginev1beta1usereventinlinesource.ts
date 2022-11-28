import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1UserEvent } from "./googlecloudrecommendationenginev1beta1userevent";



// GoogleCloudRecommendationengineV1beta1UserEventInlineSource
/** 
 * The inline source for the input config for ImportUserEvents method.
**/
export class GoogleCloudRecommendationengineV1beta1UserEventInlineSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userEvents", elemType: GoogleCloudRecommendationengineV1beta1UserEvent })
  userEvents?: GoogleCloudRecommendationengineV1beta1UserEvent[];
}
