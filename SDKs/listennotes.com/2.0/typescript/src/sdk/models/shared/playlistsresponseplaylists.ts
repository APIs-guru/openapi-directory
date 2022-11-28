import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaylistVisibilityFieldEnum } from "./playlistvisibilityfieldenum";



// PlaylistsResponsePlaylists
/** 
 * A playlist
**/
export class PlaylistsResponsePlaylists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=episode_count" })
  episodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=last_timestamp_ms" })
  lastTimestampMs?: number;

  @SpeakeasyMetadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=podcast_count" })
  podcastCount?: number;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: PlaylistVisibilityFieldEnum;
}
