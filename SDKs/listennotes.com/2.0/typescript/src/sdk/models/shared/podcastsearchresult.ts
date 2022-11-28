import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PodcastSearchResult
/** 
 * When **type** is *podcast*.
**/
export class PodcastSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description_highlighted" })
  descriptionHighlighted?: string;

  @SpeakeasyMetadata({ data: "json, name=description_original" })
  descriptionOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=earliest_pub_date_ms" })
  earliestPubDateMs?: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=explicit_content" })
  explicitContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=genre_ids" })
  genreIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=itunes_id" })
  itunesId?: number;

  @SpeakeasyMetadata({ data: "json, name=latest_pub_date_ms" })
  latestPubDateMs?: number;

  @SpeakeasyMetadata({ data: "json, name=listen_score" })
  listenScore?: number;

  @SpeakeasyMetadata({ data: "json, name=listen_score_global_rank" })
  listenScoreGlobalRank?: string;

  @SpeakeasyMetadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher_highlighted" })
  publisherHighlighted?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher_original" })
  publisherOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=rss" })
  rss?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=title_highlighted" })
  titleHighlighted?: string;

  @SpeakeasyMetadata({ data: "json, name=title_original" })
  titleOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=total_episodes" })
  totalEpisodes?: number;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
