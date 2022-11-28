import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroupSnippet
/** 
 * A group snippet.
**/
export class GroupSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
