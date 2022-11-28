import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum {
    FeedbackThreadStatusUnspecified = "FEEDBACK_THREAD_STATUS_UNSPECIFIED",
    New = "NEW",
    Replied = "REPLIED"
}


export class GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;
}
