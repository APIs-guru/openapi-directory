import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EpisodeSearchResult } from "./episodesearchresult";
import { PodcastSearchResult } from "./podcastsearchresult";
import { CuratedListSearchResult } from "./curatedlistsearchresult";


export class SearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=next_offset" })
  nextOffset?: number;

  @Metadata({ data: "json, name=results" })
  results?: any[];

  @Metadata({ data: "json, name=took" })
  took?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
