import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WordInfo } from "./wordinfo";


// SpeechRecognitionAlternative
/** 
 * Alternative hypotheses (a.k.a. n-best list).
**/
export class SpeechRecognitionAlternative extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=transcript" })
  transcript?: string;

  @Metadata({ data: "json, name=words", elemType: shared.WordInfo })
  words?: WordInfo[];
}
