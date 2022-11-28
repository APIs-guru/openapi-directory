import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CuratedListSimple } from "./curatedlistsimple";



export class GetCuratedPodcastsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=curated_lists", elemType: CuratedListSimple })
  curatedLists: CuratedListSimple[];

  @SpeakeasyMetadata({ data: "json, name=has_next" })
  hasNext: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_previous" })
  hasPrevious: boolean;

  @SpeakeasyMetadata({ data: "json, name=next_page_number" })
  nextPageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_number" })
  previousPageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}
