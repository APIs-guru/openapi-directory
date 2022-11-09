import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlaylistVisibilityFieldEnum } from "./playlistvisibilityfieldenum";


// PlaylistsResponsePlaylists
/** 
 * A playlist
**/
export class PlaylistsResponsePlaylists extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=episode_count" })
  episodeCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=last_timestamp_ms" })
  lastTimestampMs?: number;

  @Metadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=podcast_count" })
  podcastCount?: number;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: PlaylistVisibilityFieldEnum;
}
