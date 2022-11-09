import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1FeedbackThread } from "./googleclouddatalabelingv1beta1feedbackthread";


// GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse
/** 
 * Results for listing FeedbackThreads.
**/
export class GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedbackThreads", elemType: shared.GoogleCloudDatalabelingV1beta1FeedbackThread })
  feedbackThreads?: GoogleCloudDatalabelingV1beta1FeedbackThread[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
