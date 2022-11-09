import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudPubsubTopic
/** 
 * A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
**/
export class CloudPubsubTopic extends SpeakeasyBase {
  @Metadata({ data: "json, name=topicName" })
  topicName?: string;
}
