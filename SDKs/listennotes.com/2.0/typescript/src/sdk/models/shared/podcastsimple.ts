import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PodcastExtraField } from "./podcastextrafield";
import { PodcastLookingForField } from "./podcastlookingforfield";
import { PodcastTypeFieldEnum } from "./podcasttypefieldenum";


export class PodcastSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=earliest_pub_date_ms" })
  earliestPubDateMs?: number;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=explicit_content" })
  explicitContent?: boolean;

  @Metadata({ data: "json, name=extra" })
  extra?: PodcastExtraField;

  @Metadata({ data: "json, name=genre_ids" })
  genreIds?: number[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=is_claimed" })
  isClaimed?: boolean;

  @Metadata({ data: "json, name=itunes_id" })
  itunesId?: number;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=latest_pub_date_ms" })
  latestPubDateMs?: number;

  @Metadata({ data: "json, name=listen_score" })
  listenScore?: number;

  @Metadata({ data: "json, name=listen_score_global_rank" })
  listenScoreGlobalRank?: string;

  @Metadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @Metadata({ data: "json, name=looking_for" })
  lookingFor?: PodcastLookingForField;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=rss" })
  rss?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=total_episodes" })
  totalEpisodes?: number;

  @Metadata({ data: "json, name=type" })
  type?: PodcastTypeFieldEnum;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
