import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ComputeMessageStatsResponse
/** 
 * Response containing stats for messages in the requested topic and partition.
**/
export class ComputeMessageStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageBytes" })
  messageBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=messageCount" })
  messageCount?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumEventTime" })
  minimumEventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumPublishTime" })
  minimumPublishTime?: string;
}
