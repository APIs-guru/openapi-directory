import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CommentSnippetAuthorChannelId
/** 
 * The id of the author's YouTube channel, if any.
**/
export class CommentSnippetAuthorChannelId extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
