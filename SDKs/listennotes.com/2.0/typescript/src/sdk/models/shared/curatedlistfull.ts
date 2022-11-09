import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PodcastSimple } from "./podcastsimple";


export class CuratedListFull extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=listennotes_url" })
  listennotesUrl?: string;

  @Metadata({ data: "json, name=podcasts", elemType: shared.PodcastSimple })
  podcasts?: PodcastSimple[];

  @Metadata({ data: "json, name=pub_date_ms" })
  pubDateMs?: number;

  @Metadata({ data: "json, name=source_domain" })
  sourceDomain?: string;

  @Metadata({ data: "json, name=source_url" })
  sourceUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
