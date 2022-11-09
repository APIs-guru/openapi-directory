import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EpisodeSimple } from "./episodesimple";
import { PodcastSimple } from "./podcastsimple";
import { CustomAudio } from "./customaudio";
import { DeletedItem } from "./deleteditem";

export enum PlaylistItemTypeEnum {
    Episode = "episode"
,    CustomAudio = "custom_audio"
,    Podcast = "podcast"
}


// PlaylistItem
/** 
 * An item in a playlist
**/
export class PlaylistItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=added_at_ms" })
  addedAtMs?: number;

  @Metadata({ data: "json, name=data" })
  data?: any;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=type" })
  type?: PlaylistItemTypeEnum;
}
