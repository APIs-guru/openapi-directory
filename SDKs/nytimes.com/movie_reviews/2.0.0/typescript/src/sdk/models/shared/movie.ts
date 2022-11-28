import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MovieLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggested_link_text" })
  suggestedLinkText?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class MovieMultimediaResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class MovieMultimedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: MovieMultimediaResource;
}


export class Movie extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byline" })
  byline?: string;

  @SpeakeasyMetadata({ data: "json, name=critics_pick" })
  criticsPick?: number;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=display_title" })
  displayTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=headline" })
  headline?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: MovieLink;

  @SpeakeasyMetadata({ data: "json, name=mpaa_rating" })
  mpaaRating?: string;

  @SpeakeasyMetadata({ data: "json, name=multimedia" })
  multimedia?: MovieMultimedia;

  @SpeakeasyMetadata({ data: "json, name=opening_date" })
  openingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=publication_date" })
  publicationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=summary_short" })
  summaryShort?: string;
}
