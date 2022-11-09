import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudPubsubTopic
/** 
 * A Pub/Sub topic.
**/
export class CloudPubsubTopic extends SpeakeasyBase {
  @Metadata({ data: "json, name=topicName" })
  topicName?: string;
}
