import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TopicPartitions
/** 
 * Response for GetTopicPartitions.
**/
export class TopicPartitions extends SpeakeasyBase {
  @Metadata({ data: "json, name=partitionCount" })
  partitionCount?: string;
}
