import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReviewAuthor
/** 
 * Author of this review.
**/
export class ReviewAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;
}


// ReviewSource
/** 
 * Information regarding the source of this review, when the review is not from a Google Books user.
**/
export class ReviewSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extraDescription" })
  extraDescription?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class Review extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: ReviewAuthor;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=fullTextUrl" })
  fullTextUrl?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: string;

  @Metadata({ data: "json, name=source" })
  source?: ReviewSource;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}
