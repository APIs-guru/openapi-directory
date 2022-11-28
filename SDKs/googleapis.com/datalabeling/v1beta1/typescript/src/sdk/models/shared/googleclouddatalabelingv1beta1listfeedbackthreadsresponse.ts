import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1FeedbackThread } from "./googleclouddatalabelingv1beta1feedbackthread";



// GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse
/** 
 * Results for listing FeedbackThreads.
**/
export class GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedbackThreads", elemType: GoogleCloudDatalabelingV1beta1FeedbackThread })
  feedbackThreads?: GoogleCloudDatalabelingV1beta1FeedbackThread[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
