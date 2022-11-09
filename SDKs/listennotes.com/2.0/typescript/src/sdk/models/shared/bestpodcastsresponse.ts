import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PodcastSimple } from "./podcastsimple";


export class BestPodcastsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=has_next" })
  hasNext: boolean;

  @Metadata({ data: "json, name=has_previous" })
  hasPrevious: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=listennotes_url" })
  listennotesUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=next_page_number" })
  nextPageNumber: number;

  @Metadata({ data: "json, name=page_number" })
  pageNumber: number;

  @Metadata({ data: "json, name=parent_id" })
  parentId: number;

  @Metadata({ data: "json, name=podcasts", elemType: shared.PodcastSimple })
  podcasts: PodcastSimple[];

  @Metadata({ data: "json, name=previous_page_number" })
  previousPageNumber: number;

  @Metadata({ data: "json, name=total" })
  total: number;
}
