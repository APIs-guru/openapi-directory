import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommendationengineV1beta1UserEvent } from "./googlecloudrecommendationenginev1beta1userevent";


// GoogleCloudRecommendationengineV1beta1UserEventInlineSource
/** 
 * The inline source for the input config for ImportUserEvents method.
**/
export class GoogleCloudRecommendationengineV1beta1UserEventInlineSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=userEvents", elemType: shared.GoogleCloudRecommendationengineV1beta1UserEvent })
  userEvents?: GoogleCloudRecommendationengineV1beta1UserEvent[];
}
