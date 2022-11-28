import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Article extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abstract" })
  abstract?: string;

  @SpeakeasyMetadata({ data: "json, name=byline" })
  byline?: string;

  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=des_facet" })
  desFacet?: any;

  @SpeakeasyMetadata({ data: "json, name=geo_facet" })
  geoFacet?: any;

  @SpeakeasyMetadata({ data: "json, name=media" })
  media?: any;

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
