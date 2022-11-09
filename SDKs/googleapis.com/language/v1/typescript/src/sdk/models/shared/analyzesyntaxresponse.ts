import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Sentence } from "./sentence";
import { Token } from "./token";


// AnalyzeSyntaxResponse
/** 
 * The syntax analysis response message.
**/
export class AnalyzeSyntaxResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=sentences", elemType: shared.Sentence })
  sentences?: Sentence[];

  @Metadata({ data: "json, name=tokens", elemType: shared.Token })
  tokens?: Token[];
}
