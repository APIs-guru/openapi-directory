import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1UserEvent } from "./googlecloudrecommendationenginev1beta1userevent";
/**
 * Response message for ListUserEvents method.
**/
export declare class GoogleCloudRecommendationengineV1beta1ListUserEventsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    userEvents?: GoogleCloudRecommendationengineV1beta1UserEvent[];
}
