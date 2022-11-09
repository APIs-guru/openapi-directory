import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MovieLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggested_link_text" })
  suggestedLinkText?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class MovieMultimediaResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=src" })
  src?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


export class MovieMultimedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: MovieMultimediaResource;
}


export class Movie extends SpeakeasyBase {
  @Metadata({ data: "json, name=byline" })
  byline?: string;

  @Metadata({ data: "json, name=critics_pick" })
  criticsPick?: number;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=display_title" })
  displayTitle?: string;

  @Metadata({ data: "json, name=headline" })
  headline?: string;

  @Metadata({ data: "json, name=link" })
  link?: MovieLink;

  @Metadata({ data: "json, name=mpaa_rating" })
  mpaaRating?: string;

  @Metadata({ data: "json, name=multimedia" })
  multimedia?: MovieMultimedia;

  @Metadata({ data: "json, name=opening_date" })
  openingDate?: string;

  @Metadata({ data: "json, name=publication_date" })
  publicationDate?: string;

  @Metadata({ data: "json, name=summary_short" })
  summaryShort?: string;
}
