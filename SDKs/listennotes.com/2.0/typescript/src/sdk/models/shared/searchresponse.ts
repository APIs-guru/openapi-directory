import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EpisodeSearchResult } from "./episodesearchresult";
import { PodcastSearchResult } from "./podcastsearchresult";
import { CuratedListSearchResult } from "./curatedlistsearchresult";



export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=next_offset" })
  nextOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: any[];

  @SpeakeasyMetadata({ data: "json, name=took" })
  took?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
