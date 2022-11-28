import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReviewAuthor
/** 
 * Author of this review.
**/
export class ReviewAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;
}


// ReviewSource
/** 
 * Information regarding the source of this review, when the review is not from a Google Books user.
**/
export class ReviewSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=extraDescription" })
  extraDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class Review extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: ReviewAuthor;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=fullTextUrl" })
  fullTextUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ReviewSource;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
