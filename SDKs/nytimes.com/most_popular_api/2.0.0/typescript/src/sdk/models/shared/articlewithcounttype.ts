import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArticleWithCountTypeMediaMediaMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class ArticleWithCountTypeMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=media-metadata" })
  mediaMetadata?: ArticleWithCountTypeMediaMediaMetadata;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class ArticleWithCountType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abstract" })
  abstract?: string;

  @SpeakeasyMetadata({ data: "json, name=byline" })
  byline?: string;

  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=count_type" })
  countType?: string;

  @SpeakeasyMetadata({ data: "json, name=des_facet" })
  desFacet?: any;

  @SpeakeasyMetadata({ data: "json, name=geo_facet" })
  geoFacet?: any;

  @SpeakeasyMetadata({ data: "json, name=media", elemType: ArticleWithCountTypeMedia })
  media?: ArticleWithCountTypeMedia[];

  @SpeakeasyMetadata({ data: "json, name=org_facet" })
  orgFacet?: any[];

  @SpeakeasyMetadata({ data: "json, name=per_facet" })
  perFacet?: any[];

  @SpeakeasyMetadata({ data: "json, name=published_date" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
