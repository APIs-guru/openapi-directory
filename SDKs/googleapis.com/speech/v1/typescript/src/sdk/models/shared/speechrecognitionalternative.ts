import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WordInfo } from "./wordinfo";



// SpeechRecognitionAlternative
/** 
 * Alternative hypotheses (a.k.a. n-best list).
**/
export class SpeechRecognitionAlternative extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=transcript" })
  transcript?: string;

  @SpeakeasyMetadata({ data: "json, name=words", elemType: WordInfo })
  words?: WordInfo[];
}
