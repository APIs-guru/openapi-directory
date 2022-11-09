import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArticleWithCountTypeMediaMediaMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


export class ArticleWithCountTypeMedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=media-metadata" })
  mediaMetadata?: ArticleWithCountTypeMediaMediaMetadata;

  @Metadata({ data: "json, name=subtype" })
  subtype?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class ArticleWithCountType extends SpeakeasyBase {
  @Metadata({ data: "json, name=abstract" })
  abstract?: string;

  @Metadata({ data: "json, name=byline" })
  byline?: string;

  @Metadata({ data: "json, name=column" })
  column?: string;

  @Metadata({ data: "json, name=count_type" })
  countType?: string;

  @Metadata({ data: "json, name=des_facet" })
  desFacet?: any;

  @Metadata({ data: "json, name=geo_facet" })
  geoFacet?: any;

  @Metadata({ data: "json, name=media", elemType: shared.ArticleWithCountTypeMedia })
  media?: ArticleWithCountTypeMedia[];

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
