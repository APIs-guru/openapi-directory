import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`.
**/
export declare class ChannelAssignedTargetingOptionDetails extends SpeakeasyBase {
    channelId?: string;
    negative?: boolean;
}
