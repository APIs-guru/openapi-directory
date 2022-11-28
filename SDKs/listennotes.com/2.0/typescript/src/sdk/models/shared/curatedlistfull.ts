import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PodcastSimple } from "./podcastsimple";



export class CuratedListFull extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=podcasts", elemType: PodcastSimple })
  podcasts?: PodcastSimple[];

  @SpeakeasyMetadata({ data: "json, name=pub_date_ms" })
  pubDateMs?: number;

  @SpeakeasyMetadata({ data: "json, name=source_domain" })
  sourceDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=source_url" })
  sourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
