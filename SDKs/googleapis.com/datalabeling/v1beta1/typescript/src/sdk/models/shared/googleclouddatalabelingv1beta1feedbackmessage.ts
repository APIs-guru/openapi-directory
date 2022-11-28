import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1FeedbackMessage
/** 
 * A feedback message inside a feedback thread.
**/
export class GoogleCloudDatalabelingV1beta1FeedbackMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operatorFeedbackMetadata" })
  operatorFeedbackMetadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=requesterFeedbackMetadata" })
  requesterFeedbackMetadata?: Map<string, any>;
}
