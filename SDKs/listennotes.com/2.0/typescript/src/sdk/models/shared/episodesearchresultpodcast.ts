import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EpisodeSearchResultPodcast
/** 
 * The podcast that this episode belongs to.
**/
export class EpisodeSearchResultPodcast extends SpeakeasyBase {
  @Metadata({ data: "json, name=genre_ids" })
  genreIds?: number[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

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

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=title_highlighted" })
  titleHighlighted?: string;

  @Metadata({ data: "json, name=title_original" })
  titleOriginal?: string;
}
