import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupSnippet
/** 
 * A group snippet.
**/
export class GroupSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
