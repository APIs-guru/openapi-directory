import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response containing stats for messages in the requested topic and partition.
**/
export declare class ComputeMessageStatsResponse extends SpeakeasyBase {
    messageBytes?: string;
    messageCount?: string;
    minimumEventTime?: string;
    minimumPublishTime?: string;
}
