import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TopicPartitions
/** 
 * Response for GetTopicPartitions.
**/
export class TopicPartitions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partitionCount" })
  partitionCount?: string;
}
