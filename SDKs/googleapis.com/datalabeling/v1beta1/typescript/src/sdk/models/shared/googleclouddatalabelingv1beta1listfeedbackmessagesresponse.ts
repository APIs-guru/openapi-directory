import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1FeedbackMessage } from "./googleclouddatalabelingv1beta1feedbackmessage";


// GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse
/** 
 * Results for listing FeedbackMessages.
**/
export class GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedbackMessages", elemType: shared.GoogleCloudDatalabelingV1beta1FeedbackMessage })
  feedbackMessages?: GoogleCloudDatalabelingV1beta1FeedbackMessage[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
