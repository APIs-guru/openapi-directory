import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeScores } from "./attributescores";
import { TextEntry } from "./textentry";
import { Context } from "./context";
/**
 * The comment score suggestion request message.
**/
export declare class SuggestCommentScoreRequest extends SpeakeasyBase {
    attributeScores?: Map<string, AttributeScores>;
    clientToken?: string;
    comment?: TextEntry;
    communityId?: string;
    context?: Context;
    languages?: string[];
    sessionId?: string;
}
