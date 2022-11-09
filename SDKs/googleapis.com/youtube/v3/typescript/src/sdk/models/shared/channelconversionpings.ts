import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChannelConversionPing } from "./channelconversionping";


// ChannelConversionPings
/** 
 * The conversionPings object encapsulates information about conversion pings that need to be respected by the channel.
**/
export class ChannelConversionPings extends SpeakeasyBase {
  @Metadata({ data: "json, name=pings", elemType: shared.ChannelConversionPing })
  pings?: ChannelConversionPing[];
}
