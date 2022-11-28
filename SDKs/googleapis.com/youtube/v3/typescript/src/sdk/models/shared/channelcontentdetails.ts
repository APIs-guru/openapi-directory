import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelContentDetailsRelatedPlaylists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=favorites" })
  favorites?: string;

  @SpeakeasyMetadata({ data: "json, name=likes" })
  likes?: string;

  @SpeakeasyMetadata({ data: "json, name=uploads" })
  uploads?: string;

  @SpeakeasyMetadata({ data: "json, name=watchHistory" })
  watchHistory?: string;

  @SpeakeasyMetadata({ data: "json, name=watchLater" })
  watchLater?: string;
}


// ChannelContentDetails
/** 
 * Details about the content of a channel.
**/
export class ChannelContentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relatedPlaylists" })
  relatedPlaylists?: ChannelContentDetailsRelatedPlaylists;
}
