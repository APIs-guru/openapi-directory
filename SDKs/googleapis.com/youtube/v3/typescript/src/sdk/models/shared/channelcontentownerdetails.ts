import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelContentOwnerDetails
/** 
 * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
**/
export class ChannelContentOwnerDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentOwner" })
  contentOwner?: string;

  @SpeakeasyMetadata({ data: "json, name=timeLinked" })
  timeLinked?: Date;
}
