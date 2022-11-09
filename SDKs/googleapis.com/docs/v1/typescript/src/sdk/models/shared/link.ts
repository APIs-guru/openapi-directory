import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Link
/** 
 * A reference to another portion of a document or an external URL resource.
**/
export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookmarkId" })
  bookmarkId?: string;

  @Metadata({ data: "json, name=headingId" })
  headingId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
