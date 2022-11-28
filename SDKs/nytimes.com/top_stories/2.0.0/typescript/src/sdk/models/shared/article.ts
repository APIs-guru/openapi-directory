import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArticleMultimedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class ArticleRelatedUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggested_link_text" })
  suggestedLinkText?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class Article extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abstract" })
  abstract?: string;

  @SpeakeasyMetadata({ data: "json, name=byline" })
  byline?: string;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=des_facet" })
  desFacet?: string[];

  @SpeakeasyMetadata({ data: "json, name=geo_facet" })
  geoFacet?: string[];

  @SpeakeasyMetadata({ data: "json, name=item_type" })
  itemType?: string;

  @SpeakeasyMetadata({ data: "json, name=kicker" })
  kicker?: string;

  @SpeakeasyMetadata({ data: "json, name=material_type_facet" })
  materialTypeFacet?: string;

  @SpeakeasyMetadata({ data: "json, name=multimedia", elemType: ArticleMultimedia })
  multimedia?: ArticleMultimedia[];

  @SpeakeasyMetadata({ data: "json, name=org_facet" })
  orgFacet?: string[];

  @SpeakeasyMetadata({ data: "json, name=per_facet" })
  perFacet?: string[];

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=related_urls", elemType: ArticleRelatedUrls })
  relatedUrls?: ArticleRelatedUrls[];

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: string;

  @SpeakeasyMetadata({ data: "json, name=short_url" })
  shortUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subsection" })
  subsection?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail_standard" })
  thumbnailStandard?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_date" })
  updatedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
