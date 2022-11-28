import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A feedback message inside a feedback thread.
**/
export declare class GoogleCloudDatalabelingV1beta1FeedbackMessage extends SpeakeasyBase {
    body?: string;
    createTime?: string;
    image?: string;
    name?: string;
    operatorFeedbackMetadata?: Map<string, any>;
    requesterFeedbackMetadata?: Map<string, any>;
}
