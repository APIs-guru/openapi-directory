import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SuggestCommentScoreResponse
/** 
 * The comment score suggestion response message.
**/
export class SuggestCommentScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages" })
  detectedLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=requestedLanguages" })
  requestedLanguages?: string[];
}
