import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlaylistItem } from "./playlistitem";
import { PlaylistVisibilityFieldEnum } from "./playlistvisibilityfieldenum";


export enum PlaylistResponseTypeEnum {
    EpisodeList = "episode_list",
    PodcastList = "podcast_list"
}


export class PlaylistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: PlaylistItem })
  items?: PlaylistItem[];

  @SpeakeasyMetadata({ data: "json, name=last_timestamp_ms" })
  lastTimestampMs?: number;

  @SpeakeasyMetadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PlaylistResponseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: PlaylistVisibilityFieldEnum;
}
