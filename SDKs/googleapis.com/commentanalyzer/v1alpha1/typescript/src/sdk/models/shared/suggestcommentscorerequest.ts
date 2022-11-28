import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeScores } from "./attributescores";
import { TextEntry } from "./textentry";
import { Context } from "./context";



// SuggestCommentScoreRequest
/** 
 * The comment score suggestion request message.
**/
export class SuggestCommentScoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeScores", elemType: AttributeScores })
  attributeScores?: Map<string, AttributeScores>;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: TextEntry;

  @SpeakeasyMetadata({ data: "json, name=communityId" })
  communityId?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Context;

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;
}
