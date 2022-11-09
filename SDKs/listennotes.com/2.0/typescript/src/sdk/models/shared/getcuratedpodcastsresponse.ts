import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CuratedListSimple } from "./curatedlistsimple";


export class GetCuratedPodcastsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=curated_lists", elemType: shared.CuratedListSimple })
  curatedLists: CuratedListSimple[];

  @Metadata({ data: "json, name=has_next" })
  hasNext: boolean;

  @Metadata({ data: "json, name=has_previous" })
  hasPrevious: boolean;

  @Metadata({ data: "json, name=next_page_number" })
  nextPageNumber: number;

  @Metadata({ data: "json, name=page_number" })
  pageNumber: number;

  @Metadata({ data: "json, name=previous_page_number" })
  previousPageNumber: number;

  @Metadata({ data: "json, name=total" })
  total: number;
}
