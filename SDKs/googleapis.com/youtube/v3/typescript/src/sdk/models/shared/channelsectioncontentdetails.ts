import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelSectionContentDetails
/** 
 * Details about a channelsection, including playlists and channels.
**/
export class ChannelSectionContentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: string[];

  @SpeakeasyMetadata({ data: "json, name=playlists" })
  playlists?: string[];
}
