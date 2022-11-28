import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EpisodeSimple } from "./episodesimple";
import { PodcastSimple } from "./podcastsimple";
import { CustomAudio } from "./customaudio";
import { DeletedItem } from "./deleteditem";


export enum PlaylistItemTypeEnum {
    Episode = "episode",
    CustomAudio = "custom_audio",
    Podcast = "podcast"
}


// PlaylistItem
/** 
 * An item in a playlist
**/
export class PlaylistItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_at_ms" })
  addedAtMs?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PlaylistItemTypeEnum;
}
