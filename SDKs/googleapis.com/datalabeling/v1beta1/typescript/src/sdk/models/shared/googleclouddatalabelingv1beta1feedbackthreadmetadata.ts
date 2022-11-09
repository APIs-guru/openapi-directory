import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum {
    FeedbackThreadStatusUnspecified = "FEEDBACK_THREAD_STATUS_UNSPECIFIED"
,    New = "NEW"
,    Replied = "REPLIED"
}


export class GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;
}
