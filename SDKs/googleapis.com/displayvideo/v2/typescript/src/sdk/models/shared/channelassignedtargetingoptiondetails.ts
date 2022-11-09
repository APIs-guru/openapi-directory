import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelAssignedTargetingOptionDetails
/** 
 * Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`.
**/
export class ChannelAssignedTargetingOptionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=negative" })
  negative?: boolean;
}
