import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SuggestCommentScoreResponse
/** 
 * The comment score suggestion response message.
**/
export class SuggestCommentScoreResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=detectedLanguages" })
  detectedLanguages?: string[];

  @Metadata({ data: "json, name=requestedLanguages" })
  requestedLanguages?: string[];
}
