import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PodcastSearchResult
/** 
 * When **type** is *podcast*.
**/
export class PodcastSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_highlighted" })
  descriptionHighlighted?: string;

  @Metadata({ data: "json, name=description_original" })
  descriptionOriginal?: string;

  @Metadata({ data: "json, name=earliest_pub_date_ms" })
  earliestPubDateMs?: number;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=explicit_content" })
  explicitContent?: boolean;

  @Metadata({ data: "json, name=genre_ids" })
  genreIds?: number[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=itunes_id" })
  itunesId?: number;

  @Metadata({ data: "json, name=latest_pub_date_ms" })
  latestPubDateMs?: number;

  @Metadata({ data: "json, name=listen_score" })
  listenScore?: number;

  @Metadata({ data: "json, name=listen_score_global_rank" })
  listenScoreGlobalRank?: string;

  @Metadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @Metadata({ data: "json, name=publisher_highlighted" })
  publisherHighlighted?: string;

  @Metadata({ data: "json, name=publisher_original" })
  publisherOriginal?: string;

  @Metadata({ data: "json, name=rss" })
  rss?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=title_highlighted" })
  titleHighlighted?: string;

  @Metadata({ data: "json, name=title_original" })
  titleOriginal?: string;

  @Metadata({ data: "json, name=total_episodes" })
  totalEpisodes?: number;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
