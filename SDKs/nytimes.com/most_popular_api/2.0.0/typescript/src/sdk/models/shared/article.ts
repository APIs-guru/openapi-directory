import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Article extends SpeakeasyBase {
  @Metadata({ data: "json, name=abstract" })
  abstract?: string;

  @Metadata({ data: "json, name=byline" })
  byline?: string;

  @Metadata({ data: "json, name=column" })
  column?: string;

  @Metadata({ data: "json, name=des_facet" })
  desFacet?: any;

  @Metadata({ data: "json, name=geo_facet" })
  geoFacet?: any;

  @Metadata({ data: "json, name=media" })
  media?: any;

  @Metadata({ data: "json, name=org_facet" })
  orgFacet?: any[];

  @Metadata({ data: "json, name=per_facet" })
  perFacet?: any[];

  @Metadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @Metadata({ data: "json, name=section" })
  section?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
