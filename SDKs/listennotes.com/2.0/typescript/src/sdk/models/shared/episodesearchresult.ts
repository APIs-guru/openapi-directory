import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EpisodeSearchResultPodcast } from "./episodesearchresultpodcast";


// EpisodeSearchResult
/** 
 * When **type** is *episode*.
**/
export class EpisodeSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: string;

  @Metadata({ data: "json, name=audio_length_sec" })
  audioLengthSec?: number;

  @Metadata({ data: "json, name=description_highlighted" })
  descriptionHighlighted?: string;

  @Metadata({ data: "json, name=description_original" })
  descriptionOriginal?: string;

  @Metadata({ data: "json, name=explicit_content" })
  explicitContent?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=itunes_id" })
  itunesId?: number;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @Metadata({ data: "json, name=podcast" })
  podcast?: EpisodeSearchResultPodcast;

  @Metadata({ data: "json, name=pub_date_ms" })
  pubDateMs?: number;

  @Metadata({ data: "json, name=rss" })
  rss?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=title_highlighted" })
  titleHighlighted?: string;

  @Metadata({ data: "json, name=title_original" })
  titleOriginal?: string;

  @Metadata({ data: "json, name=transcripts_highlighted" })
  transcriptsHighlighted?: string[];
}
