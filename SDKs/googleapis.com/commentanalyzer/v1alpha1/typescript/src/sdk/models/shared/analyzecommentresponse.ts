import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttributeScores } from "./attributescores";


// AnalyzeCommentResponse
/** 
 * The comment analysis response message.
**/
export class AnalyzeCommentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeScores", elemType: shared.AttributeScores })
  attributeScores?: Map<string, AttributeScores>;

  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=detectedLanguages" })
  detectedLanguages?: string[];

  @Metadata({ data: "json, name=languages" })
  languages?: string[];
}
