import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComputeMessageStatsResponse
/** 
 * Response containing stats for messages in the requested topic and partition.
**/
export class ComputeMessageStatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageBytes" })
  messageBytes?: string;

  @Metadata({ data: "json, name=messageCount" })
  messageCount?: string;

  @Metadata({ data: "json, name=minimumEventTime" })
  minimumEventTime?: string;

  @Metadata({ data: "json, name=minimumPublishTime" })
  minimumPublishTime?: string;
}
