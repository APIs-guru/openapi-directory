import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PubsubTarget
/** 
 * Pub/Sub target. The job will be delivered by publishing a message to the given Pub/Sub topic.
**/
export class PubsubTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=topicName" })
  topicName?: string;
}
