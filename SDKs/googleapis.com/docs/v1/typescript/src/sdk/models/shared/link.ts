import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Link
/** 
 * A reference to another portion of a document or an external URL resource.
**/
export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookmarkId" })
  bookmarkId?: string;

  @SpeakeasyMetadata({ data: "json, name=headingId" })
  headingId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
