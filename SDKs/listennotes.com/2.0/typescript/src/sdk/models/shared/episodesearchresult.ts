import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EpisodeSearchResultPodcast } from "./episodesearchresultpodcast";



// EpisodeSearchResult
/** 
 * When **type** is *episode*.
**/
export class EpisodeSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: string;

  @SpeakeasyMetadata({ data: "json, name=audio_length_sec" })
  audioLengthSec?: number;

  @SpeakeasyMetadata({ data: "json, name=description_highlighted" })
  descriptionHighlighted?: string;

  @SpeakeasyMetadata({ data: "json, name=description_original" })
  descriptionOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=explicit_content" })
  explicitContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=itunes_id" })
  itunesId?: number;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=podcast" })
  podcast?: EpisodeSearchResultPodcast;

  @SpeakeasyMetadata({ data: "json, name=pub_date_ms" })
  pubDateMs?: number;

  @SpeakeasyMetadata({ data: "json, name=rss" })
  rss?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=title_highlighted" })
  titleHighlighted?: string;

  @SpeakeasyMetadata({ data: "json, name=title_original" })
  titleOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=transcripts_highlighted" })
  transcriptsHighlighted?: string[];
}
