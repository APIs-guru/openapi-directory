import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PodcastExtraField } from "./podcastextrafield";
import { PodcastLookingForField } from "./podcastlookingforfield";
import { PodcastTypeFieldEnum } from "./podcasttypefieldenum";



export class PodcastSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=earliest_pub_date_ms" })
  earliestPubDateMs?: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=explicit_content" })
  explicitContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: PodcastExtraField;

  @SpeakeasyMetadata({ data: "json, name=genre_ids" })
  genreIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=is_claimed" })
  isClaimed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itunes_id" })
  itunesId?: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=latest_pub_date_ms" })
  latestPubDateMs?: number;

  @SpeakeasyMetadata({ data: "json, name=listen_score" })
  listenScore?: number;

  @SpeakeasyMetadata({ data: "json, name=listen_score_global_rank" })
  listenScoreGlobalRank?: string;

  @SpeakeasyMetadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=looking_for" })
  lookingFor?: PodcastLookingForField;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=rss" })
  rss?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=total_episodes" })
  totalEpisodes?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PodcastTypeFieldEnum;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
