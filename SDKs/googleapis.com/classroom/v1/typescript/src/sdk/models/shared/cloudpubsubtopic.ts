import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudPubsubTopic
/** 
 * A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
**/
export class CloudPubsubTopic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topicName" })
  topicName?: string;
}
