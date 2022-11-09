import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PodcastMinimum } from "./podcastminimum";


// CuratedListSearchResult
/** 
 * When **type** is *curated*.
**/
export class CuratedListSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_highlighted" })
  descriptionHighlighted?: string;

  @Metadata({ data: "json, name=description_original" })
  descriptionOriginal?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @Metadata({ data: "json, name=podcasts", elemType: shared.PodcastMinimum })
  podcasts?: PodcastMinimum[];

  @Metadata({ data: "json, name=pub_date_ms" })
  pubDateMs?: number;

  @Metadata({ data: "json, name=source_domain" })
  sourceDomain?: string;

  @Metadata({ data: "json, name=source_url" })
  sourceUrl?: string;

  @Metadata({ data: "json, name=title_highlighted" })
  titleHighlighted?: string;

  @Metadata({ data: "json, name=title_original" })
  titleOriginal?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
