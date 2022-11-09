import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
**/
export declare class CloudPubsubTopic extends SpeakeasyBase {
    topicName?: string;
}
