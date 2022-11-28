import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeScores } from "./attributescores";



// AnalyzeCommentResponse
/** 
 * The comment analysis response message.
**/
export class AnalyzeCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeScores", elemType: AttributeScores })
  attributeScores?: Map<string, AttributeScores>;

  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=detectedLanguages" })
  detectedLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages?: string[];
}
