import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1FeedbackThread } from "./googleclouddatalabelingv1beta1feedbackthread";
/**
 * Results for listing FeedbackThreads.
**/
export declare class GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse extends SpeakeasyBase {
    feedbackThreads?: GoogleCloudDatalabelingV1beta1FeedbackThread[];
    nextPageToken?: string;
}
