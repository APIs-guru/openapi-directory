import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EpisodeSearchResultPodcast
/** 
 * The podcast that this episode belongs to.
**/
export class EpisodeSearchResultPodcast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=genre_ids" })
  genreIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

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

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=title_highlighted" })
  titleHighlighted?: string;

  @SpeakeasyMetadata({ data: "json, name=title_original" })
  titleOriginal?: string;
}
