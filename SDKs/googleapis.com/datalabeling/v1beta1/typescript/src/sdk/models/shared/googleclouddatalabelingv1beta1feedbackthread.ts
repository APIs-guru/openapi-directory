import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata } from "./googleclouddatalabelingv1beta1feedbackthreadmetadata";


// GoogleCloudDatalabelingV1beta1FeedbackThread
/** 
 * A feedback thread of a certain labeling task on a certain annotated dataset.
**/
export class GoogleCloudDatalabelingV1beta1FeedbackThread extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedbackThreadMetadata" })
  feedbackThreadMetadata?: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
