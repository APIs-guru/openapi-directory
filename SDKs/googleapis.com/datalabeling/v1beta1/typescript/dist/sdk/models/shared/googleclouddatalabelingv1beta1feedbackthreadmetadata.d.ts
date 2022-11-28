import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum {
    FeedbackThreadStatusUnspecified = "FEEDBACK_THREAD_STATUS_UNSPECIFIED",
    New = "NEW",
    Replied = "REPLIED"
}
export declare class GoogleCloudDatalabelingV1beta1FeedbackThreadMetadata extends SpeakeasyBase {
    createTime?: string;
    lastUpdateTime?: string;
    status?: GoogleCloudDatalabelingV1beta1FeedbackThreadMetadataStatusEnum;
    thumbnail?: string;
}
