import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlaylistItem } from "./playlistitem";
import { PlaylistVisibilityFieldEnum } from "./playlistvisibilityfieldenum";

export enum PlaylistResponseTypeEnum {
    EpisodeList = "episode_list"
,    PodcastList = "podcast_list"
}


export class PlaylistResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=items", elemType: shared.PlaylistItem })
  items?: PlaylistItem[];

  @Metadata({ data: "json, name=last_timestamp_ms" })
  lastTimestampMs?: number;

  @Metadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;

  @Metadata({ data: "json, name=type" })
  type?: PlaylistResponseTypeEnum;

  @Metadata({ data: "json, name=visibility" })
  visibility?: PlaylistVisibilityFieldEnum;
}
