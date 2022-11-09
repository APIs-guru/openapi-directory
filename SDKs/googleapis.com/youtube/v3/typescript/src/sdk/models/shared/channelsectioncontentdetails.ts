import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelSectionContentDetails
/** 
 * Details about a channelsection, including playlists and channels.
**/
export class ChannelSectionContentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels" })
  channels?: string[];

  @Metadata({ data: "json, name=playlists" })
  playlists?: string[];
}
