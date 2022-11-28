import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1FeedbackMessage } from "./googleclouddatalabelingv1beta1feedbackmessage";



// GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse
/** 
 * Results for listing FeedbackMessages.
**/
export class GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedbackMessages", elemType: GoogleCloudDatalabelingV1beta1FeedbackMessage })
  feedbackMessages?: GoogleCloudDatalabelingV1beta1FeedbackMessage[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
