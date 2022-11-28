import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PodcastMinimum } from "./podcastminimum";



// CuratedListSearchResult
/** 
 * When **type** is *curated*.
**/
export class CuratedListSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description_highlighted" })
  descriptionHighlighted?: string;

  @SpeakeasyMetadata({ data: "json, name=description_original" })
  descriptionOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=podcasts", elemType: PodcastMinimum })
  podcasts?: PodcastMinimum[];

  @SpeakeasyMetadata({ data: "json, name=pub_date_ms" })
  pubDateMs?: number;

  @SpeakeasyMetadata({ data: "json, name=source_domain" })
  sourceDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=source_url" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title_highlighted" })
  titleHighlighted?: string;

  @SpeakeasyMetadata({ data: "json, name=title_original" })
  titleOriginal?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
