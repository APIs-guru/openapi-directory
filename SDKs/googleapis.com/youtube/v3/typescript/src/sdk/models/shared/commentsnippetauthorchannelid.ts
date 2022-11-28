import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CommentSnippetAuthorChannelId
/** 
 * The id of the author's YouTube channel, if any.
**/
export class CommentSnippetAuthorChannelId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
