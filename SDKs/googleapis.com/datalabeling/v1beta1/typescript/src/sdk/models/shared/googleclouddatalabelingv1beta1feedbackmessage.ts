import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1FeedbackMessage
/** 
 * A feedback message inside a feedback thread.
**/
export class GoogleCloudDatalabelingV1beta1FeedbackMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operatorFeedbackMetadata" })
  operatorFeedbackMetadata?: Map<string, any>;

  @Metadata({ data: "json, name=requesterFeedbackMetadata" })
  requesterFeedbackMetadata?: Map<string, any>;
}
