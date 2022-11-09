import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelContentOwnerDetails
/** 
 * The contentOwnerDetails object encapsulates channel data that is relevant for YouTube Partners linked with the channel.
**/
export class ChannelContentOwnerDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentOwner" })
  contentOwner?: string;

  @Metadata({ data: "json, name=timeLinked" })
  timeLinked?: Date;
}
