import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChannelContentDetailsRelatedPlaylists extends SpeakeasyBase {
  @Metadata({ data: "json, name=favorites" })
  favorites?: string;

  @Metadata({ data: "json, name=likes" })
  likes?: string;

  @Metadata({ data: "json, name=uploads" })
  uploads?: string;

  @Metadata({ data: "json, name=watchHistory" })
  watchHistory?: string;

  @Metadata({ data: "json, name=watchLater" })
  watchLater?: string;
}


// ChannelContentDetails
/** 
 * Details about the content of a channel.
**/
export class ChannelContentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=relatedPlaylists" })
  relatedPlaylists?: ChannelContentDetailsRelatedPlaylists;
}
