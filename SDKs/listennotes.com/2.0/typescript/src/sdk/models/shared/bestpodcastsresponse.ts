import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PodcastSimple } from "./podcastsimple";



export class BestPodcastsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=has_next" })
  hasNext: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_previous" })
  hasPrevious: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=listennotes_url" })
  listennotesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_number" })
  nextPageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId: number;

  @SpeakeasyMetadata({ data: "json, name=podcasts", elemType: PodcastSimple })
  podcasts: PodcastSimple[];

  @SpeakeasyMetadata({ data: "json, name=previous_page_number" })
  previousPageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}
