import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sentence } from "./sentence";
import { Token } from "./token";



// AnalyzeSyntaxResponse
/** 
 * The syntax analysis response message.
**/
export class AnalyzeSyntaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=sentences", elemType: Sentence })
  sentences?: Sentence[];

  @SpeakeasyMetadata({ data: "json, name=tokens", elemType: Token })
  tokens?: Token[];
}
