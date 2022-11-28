import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudPubsubTopic
/** 
 * A Pub/Sub topic.
**/
export class CloudPubsubTopic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topicName" })
  topicName?: string;
}
