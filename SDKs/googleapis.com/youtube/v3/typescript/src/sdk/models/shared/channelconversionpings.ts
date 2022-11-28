import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelConversionPing } from "./channelconversionping";



// ChannelConversionPings
/** 
 * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
**/
export class ChannelConversionPings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pings", elemType: ChannelConversionPing })
  pings?: ChannelConversionPing[];
}
