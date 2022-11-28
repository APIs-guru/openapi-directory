import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1UserEvent } from "./googlecloudrecommendationenginev1beta1userevent";



// GoogleCloudRecommendationengineV1beta1ListUserEventsResponse
/** 
 * Response message for ListUserEvents method.
**/
export class GoogleCloudRecommendationengineV1beta1ListUserEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=userEvents", elemType: GoogleCloudRecommendationengineV1beta1UserEvent })
  userEvents?: GoogleCloudRecommendationengineV1beta1UserEvent[];
}
