import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelAssignedTargetingOptionDetails
/** 
 * Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`.
**/
export class ChannelAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;
}
