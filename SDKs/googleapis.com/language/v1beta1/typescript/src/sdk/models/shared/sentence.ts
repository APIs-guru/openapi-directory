import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sentiment } from "./sentiment";
import { TextSpan } from "./textspan";



// Sentence
/** 
 * Represents a sentence in the input document.
**/
export class Sentence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sentiment" })
  sentiment?: Sentiment;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: TextSpan;
}
