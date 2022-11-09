import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PubsubTarget
/** 
 * Pub/Sub target. The job will be delivered by publishing a message to the given Pub/Sub topic.
**/
export class PubsubTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=topicName" })
  topicName?: string;
}
