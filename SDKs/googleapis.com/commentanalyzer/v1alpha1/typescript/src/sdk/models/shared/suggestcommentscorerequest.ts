import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeScores } from "./attributescores";
import { TextEntry } from "./textentry";
import { Context } from "./context";


// SuggestCommentScoreRequest
/** 
 * The comment score suggestion request message.
**/
export class SuggestCommentScoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeScores", elemType: shared.AttributeScores })
  attributeScores?: Map<string, AttributeScores>;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=comment" })
  comment?: TextEntry;

  @Metadata({ data: "json, name=communityId" })
  communityId?: string;

  @Metadata({ data: "json, name=context" })
  context?: Context;

  @Metadata({ data: "json, name=languages" })
  languages?: string[];

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
