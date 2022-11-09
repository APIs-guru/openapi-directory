import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleMultimedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=subtype" })
  subtype?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


export class ArticleRelatedUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggested_link_text" })
  suggestedLinkText?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class Article extends SpeakeasyBase {
  @Metadata({ data: "json, name=abstract" })
  abstract?: string;

  @Metadata({ data: "json, name=byline" })
  byline?: string;

  @Metadata({ data: "json, name=created_date" })
  createdDate?: string;

  @Metadata({ data: "json, name=des_facet" })
  desFacet?: string[];

  @Metadata({ data: "json, name=geo_facet" })
  geoFacet?: string[];

  @Metadata({ data: "json, name=item_type" })
  itemType?: string;

  @Metadata({ data: "json, name=kicker" })
  kicker?: string;

  @Metadata({ data: "json, name=material_type_facet" })
  materialTypeFacet?: string;

  @Metadata({ data: "json, name=multimedia", elemType: shared.ArticleMultimedia })
  multimedia?: ArticleMultimedia[];

  @Metadata({ data: "json, name=org_facet" })
  orgFacet?: string[];

  @Metadata({ data: "json, name=per_facet" })
  perFacet?: string[];

  @Metadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @Metadata({ data: "json, name=related_urls", elemType: shared.ArticleRelatedUrls })
  relatedUrls?: ArticleRelatedUrls[];

  @Metadata({ data: "json, name=section" })
  section?: string;

  @Metadata({ data: "json, name=short_url" })
  shortUrl?: string;

  @Metadata({ data: "json, name=subsection" })
  subsection?: string;

  @Metadata({ data: "json, name=thumbnail_standard" })
  thumbnailStandard?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_date" })
  updatedDate?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
